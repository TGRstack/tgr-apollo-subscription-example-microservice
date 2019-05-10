<p align='center'>
  <h1 align='center'>GraphQL Gateway | Platform Services | TGR</h1>
</p>

[![Known Vulnerabilities](https://snyk.io/test/github/TGRstack/skeleton-ts-gql-endpoint/badge.svg)](https://snyk.io/test/github/TGRstack/skeleton-ts-gql-endpoint)

**Development and Production Ready |⸰| [VSCode Extensions](https://marketplace.visualstudio.com/search?term=tgrstack&target=VSCode&category=All%20categories&sortBy=Relevance) |⸰| Dockers for Dev and Prod**

[![Apollo Server](https://img.shields.io/badge/Apollo-2.3.8-orange.svg?style=flat-square)](https://github.com/apollographql/apollo-server)
[![Express](https://img.shields.io/badge/Express-4.16.4-orange.svg?style=flat-square)](https://github.com/expressjs/express)

[![TypeScript](https://img.shields.io/badge/TypeScript-3.0.1-blue.svg?style=flat-square)](https://github.com/Microsoft/TypeScript)
[![TSLint](https://img.shields.io/badge/TS_Lint-5.11.0-8400ff.svg?style=flat-square)](https://github.com/palantir/tslint/)
[![TS-Jest](https://img.shields.io/badge/TS_Jest-22.4.6-8400ff.svg?style=flat-square)](https://github.com/kulshekhar/ts-jest)

[![WebPack](https://img.shields.io/badge/WebPack-4.12.2-blue.svg?style=flat-square)](https://github.com/webpack/webpack/)
[![Node](https://img.shields.io/badge/Node-11.4.0-blue.svg?style=flat-square)](https://nodejs.org/en/)

[![NPS friendly](https://img.shields.io/badge/NPS-friendly-brightgreen.svg?style=flat-square)](https://github.com/kentcdodds/nps)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-friendly-brightgreen.svg?style=flat-square)](https://commitizen.github.io/cz-cli/)
[![Semver friendly](https://img.shields.io/badge/SemVer-friendly-brightgreen.svg?style=flat-square)](https://docs.npmjs.com/about-semantic-versioning)


## Contributing

After you've cloned this repo and ran `npm i -D`, do the following:

in your **terminal**:

```bash
$ nps ss
# Starts jsut the dev server
```

### Commands

```bash
* nps                   # Executes all the tooling (watch server + watch linting)
* nps start.server      # Nodemon and webpack builds restart when files change
* nps help              # Displays all available commands
* nps commit            # Creates a commit, don't use `git commit -m ...`
* nps build             # Builds a development version of the service
* nps build.prod        # Builds a production version of the service (w/ some testing - overidable)
* nps lint              # Lint checks the module
* nps test              # Test checks the module
```


## TGR Packages (npm - @tgrx)

```bash
  "dependencies": {},
  "devDependencies": {
    "@tgrx/tslint-config-tgr": "5.0.0", # TGR tslint settings for minimial clutter
```

## Stack

### Docs

- [TGRstack.com Wiki](https://github.com/TGRstack/tgrstack.com/wiki)
- [VSCode Extensions](https://marketplace.visualstudio.com/search?term=tgrstack&target=VSCode&category=All%20categories&sortBy=Relevance)
- [How to make a TS Module w/ Declarations](http://www.tgrstack.com/#ts-module_articles)
- [TS-React-App](https://github.com/TGRstack/react-app)

### File Structure

```text
src/
├── __tests__/    - tests for stack.ts
├── config/       - server configs and vars
├── gql/          - schema, resolvers, mutations for GraphQL
├── middlewares/  - third-party HOC functionality (apollo, loggers, routers)
├── modules/      - first-party modules (co-developed)
    └── some-lib  - pre-cursor to extracting a module
├── service/      - service initialization (express, apollo, storybook)
├── types/        - ts modules, common, interfaces
├── utils/        - useful functions
├── index.ts      - build/service entry point
└── stack.ts      - import service & middlewares
```

#### Directories

```text
/
├── .netlify/         - pretty good for rolling builds                      (hidden)
├── .vscode/          - some sane settings but hides lightly used folders   (hidden)
├── build/            - the output of the webpack build process             (hidden)
├── jest/             - Jest setup and mocks                                (hidden)
├── logs/             - Store logs in files (configged by `module/logger`)
├── node_modules/         - the output of `npm i -D`                        (hidden)
├── scripts/          - LOOK IN HERE, all the functionality avail in `nps`
├── src/              - LOOK IN HERE, the server
    └── <DESCRIBED IN-DEPTH ABOVE>
├── webpack/          - Webpack configuration for making builds             (hidden)
├── .babelrc          - transpilation settings mixed w/ tsconfig            (hidden)
├── .env              - server environment's settings (removed by `.gitignore`)
├── .env.development  - suggestions for development env settings
├── .env.example      - a list of required `.env` settings
├── .gitignore        - a list of files that should not be checked into git (hidden)
├── .npmignore        - a list of files that should not be published to npm (hidden)
├── .npmrc            - npm install settings (package-lock.json disabled)   (hidden)
├── .nvmrc            - nvm config that sets the terminals NPM version      (hidden)
├── jest.config.js    - npm install settings (package-lock.json disabled)   (hidden)
├── nodemon.json      - configure nodemon (especially which directories to ignore)  (hidden)
├── package-scripts.js - nps entry point (reroutes to `/scripts/`)          (hidden)
├── package.json      - list of npm packages to be installed
├── README.md         - the most important documentation
├── TODO.md           - checklist of goals for the project
├── tsconfig.jest.json - Jest specific Typescript configuration             (hidden)
├── tsconfig.json     - Typescript settings and module aliasing             (hidden)
└── tslint.json       - Linting settings (**replaced by ESlint 2019Q3**)    (hidden)
```

##### Accessing Hidden Files from VSCode

If you are using VSCode to develop this project you will notice a lot of files are hidden by the editor. This is a workspace setting which you can access with `ctrl+p` `./vscode/settings.json`. Any file/folder which is set to `true` in "files.exclude" is automatically excluded by "search.exclude". So to make the workspace settings file available in the search but hidden in the file explorer (left sidebar) the file must be specified in "search.exclude" and set to `false`.

**This way files are accessible by search but your sidebar isn't cluttered w/ lightly used configs**

### Features

#### Core

- [x] 🚀  ES2018+ support syntax that is stage-3 or later in the TC39 process.
- [x] 🎛  Preconfigured to support development and optimized production builds
- [x] 🎶  `typescript` incremental returns reducing development bugs

#### Express

- [x] :globe_with_meridians:  `express-server`
- [x] :bread: in dev a browser to the website is opened
- [x] :mountain_railway:  `Winston` unified logger to files and console
- [x] 🔒  `Helmet` for common security holes
- [x] 🔒  `CORS` for Cross Origin denial

#### GraphQL

- [x] :satellite: `apollo-server-2`
- [x] :yum: `playground` (not  `graphiql` because using JWT instead of sessions)
- [ ] ➿  `apollo-server` w/ `subscriptions` (websocket)

#### Utils

- [x] 🎮  `nps` node-package-scripts removes the limitation of package.json enabling JS & //comments .  Modify `/package-scripts.js` and use `nps <command>` instead of `npm run <command>`.
- [x] 🙌  `commitizen` to help us generate beautifully formatted and consistent commit messages.
- [x] 😹  `cz-emoji` is a plugin for commitizen that adds emoji to the commit template.
- [x] 🏆  `standard-version` is a replacement for `npm version` with automatic CHANGELOG generation
- [ ] ✅  `commitlint` validates commit messages to follow commitizen patterns

#### Style

- [x] 🚦  `tslint` configured for strict, consistent, code style
- [ ] 🚦  `eslint` replacing TSLint in **2019Q3**
- [ ] 🚦  `ts-prettier` for some of that code-consistancy that's missing from tslint
- [ ] 🚦  `SonarTS` Static code analyzer detects bugs and suspicious patterns

#### Tests

- [x] 🎭 `jest` as the test framework.
- [x] 🎭 `ts-jest` configured to test TS files, uses tsconfig.jest.json, and skip babel.
- [x] 🎭 `enzyme`  makes it easier to assert, manipulate, and traverse components.

#### Build (w/ Webpack)

- [x] 📦  All source is bundled using Webpack v4
- [x] 🌟  webpack for dev, prod, common
- [x] 🚦  `ts-loader` for compiling typescript
- [x] 💦  babel-loader for additional polyfills (browser support)
- [ ] 😎  HappyPack
- [ ] 🤖  Auto generated Vendor DLL for smooth development experiences
- [ ] 🍃  Tree-shaking
- [ ] 🚦  `webpack-graphql-loader` for separating gql from ts files
