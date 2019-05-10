const Dotenv = require('dotenv-webpack');
const fs = require('fs')
const path = require('path')
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin')

const paths = require('./paths')
const {alias, isProd} = require('./config')

// #  RULES
const cacheLoader = (cachedLoaders = []) => {
  const cacheDebug = false
  const mkdirp = require('mkdirp');
  const cacheDirectories = new Set();
  const cacheLog = msg => cacheDebug && console.log(`[CACHE] ${msg}`)
  const cacheWrite = (key, data, callback)  =>{
    const dirname = path.dirname(key);
    const content = JSON.stringify(data);
  
    if (cacheDirectories.has(dirname)) {
      // log(`[dir exists] ${dirname}`)
      // for performance skip creating directory
      fs.writeFile(key, content, 'utf-8', callback);
      cacheLog(`[file created] ${key} `)
    } else {
      mkdirp(dirname, (mkdirErr) => {
        if (mkdirErr) {
          callback(mkdirErr);
          return;
        }
  
        cacheDirectories.add(dirname);
        cacheLog(`[dir created] ${dirname}`)
  
        fs.writeFile(key, content, 'utf-8', callback);
        cacheLog(`[file created] ${key} `)
      });
    }
  }
  const cacheRead = (key, callback)=> {
    fs.readFile(key, 'utf-8', (err, content) => {
      if (err) {
        callback(err);
        return;
      }
  
      try {
        const data = JSON.parse(content);
        callback(null, data);
        cacheLog(`[file read] ${key} `)
      } catch (e) {
        callback(e);
      }
    });
  }
  return {
    use: [
      {
        loader: 'cache-loader',
        options: {
          read: cacheRead,
          write: cacheWrite,
        }
      },
      ...cachedLoaders
    ],
    test: /\.tsx?$/,
    include: paths.src._,
  }
}

const cpuCount = require('os').cpus()
const threadLoader = {
  loader: 'thread-loader',
  options: {
      // TODO: if fork-ts-checker were enabled 1 thread should be reserved for it
      workers: cpuCount.length > 1 ? cpuCount.length  : 1,
      // workers: cpuCount.length > 1 ? cpuCount.length - 1 : 1,
  },
}
// ## TS w/ BABEL
const typescript = (() => {
  const configFile = path.resolve(paths._, 'tsconfig.json')
  const tsOptions = {
    context: paths._,
    configFile,
    transpileOnly: true,
    happyPackMode: true,
    // NOTE: TYPESCRIPT WARNINGS aren't disabled by the next 2 lines
    // because they are logged through webpack
    // silent: true,
    // logLevel: 'error',
  }
  const loader = {
    test: /\.tsx?$/,
    include: paths.src._,
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: true,
        }
      },
      {
        loader: 'ts-loader',
        options: tsOptions
      }
    ]
  }
  // return loader
  // const tsPaths = new TsconfigPathsPlugin({
  //   logLevel: 'info',
  //   configFile,
  // })

  return {
    loader,
    // paths: tsPaths,
  }
})()

// ## FILES like csv and images
const files = {
  test: /\.(jpg|png|gif|svg|pdf|ico)$/,
  // exclude: [/\.jsx?$/, /\.tsx?$/, /\.s?css$/, /\.html$/, /\.json$/],
  use: [
    {
      loader: 'file-loader',
      options: {
        name () {
          const path = 'assets'
          let name = `${path}/[sha512:hash:base64:8].[ext]`
          if(!isProd) name = `${path}/[name]?[sha512:hash:base64:4].[ext]`
          console.log("[File-Loader] pattern: ", name)
          return name
        }
      }
    },
    // {
      // loader: 'file-loader',
      // }
    // }
  ]
}

// # PLUGINS
const dotEnvOpts = (() => {
  /** dotEnvIfExists
   *
   * Uses .env.development for default values
   */
  const dotEnvIfExists = (() => {
    const envPath = path.join(paths._, '.env')
    const defaultEnvPath = envPath+'.development'

    const envExists = fs.existsSync(envPath)
    return envExists
      ? envPath
      : defaultEnvPath
  })()

  return {
    path: dotEnvIfExists, // path.join(paths._, '.env'), //  dotEnvIfExists,
    // load '.env.development' to verify the '.env' variables are all set.
    safe: path.join(paths._, '.env')+'.development',
    // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    systemvars: true,
    // hide any errors
    // silent: true
  }
})()

const findCircularDependencies = () => {
  const MAX_CYCLES = 100
  let numCyclesDetected = 0

  return new CircularDependencyPlugin({
    // exclude detection of files based on a RegExp
    exclude: /a\.js|node_modules/,
    // add errors to webpack instead of warnings
    failOnError: false,
    // allow import cycles that include an asyncronous import,
    // e.g. via import(/* webpackMode: "weak" */ './file.js')
    allowAsyncCycles: false,
    // set the current working directory for displaying module paths
    cwd: process.cwd(),
    // Hooks
    onStart({ compilation }) {
      numCyclesDetected = 0;
    },
    onDetected({ module: webpackModuleRecord, paths, compilation }) {
      numCyclesDetected++;
      // NOTE: CIRCULATOR DEP WARNINGS come from the next line
      // compilation.warnings.push(new Error(paths.join(' -> ')))
    },
    onEnd({ compilation }) {
      if (numCyclesDetected > MAX_CYCLES) {
        // compilation.errors.push(new Error(
        compilation.warnings.push(new Error(
          `Detected ${numCyclesDetected} cycles which exceeds configured limit of ${MAX_CYCLES}`
        ));
      }
    },
  })
}

module.exports = {
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.csv', '.ts', '.tsx', '.js', '.json', '.jsx'],
    modules: [paths.src._, 'node_modules'],
    alias,
  },
  module: {
    rules: [
      files,
      cacheLoader([
        threadLoader,
        ...typescript.loader.use
      ]),
      // graphql,
    ],
  },
  plugins: [
    new Dotenv(dotEnvOpts),
    // typescript.paths,
    findCircularDependencies(),
  ],
}

// ## GRAPHQL
// const graphql = {
//   test: /\.(graphql|gql)$/,
//   exclude: /node_modules/,
//   loader: 'graphql-tag/loader',
// }
