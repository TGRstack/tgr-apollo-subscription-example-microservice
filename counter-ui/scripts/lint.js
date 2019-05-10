const filePaths = [
  "src/**/*.ts",
  "src/**/*.tsx",
  "src/**/**/*.ts",
  "src/**/**/*.tsx",
  "src/**/**/**/*.ts",
  "src/**/**/**/*.tsx",
  "src/**/**/**/**/*.ts",
  "src/**/**/**/**/*.tsx",
  "src/**/**/**/**/**/*.ts",
  "src/**/**/**/**/**/*.tsx",
  "src/**/**/**/**/**/**/*.ts",
  "src/**/**/**/**/**/**/*.tsx",
  "scripts/lint.js",         // this file
  "tslint.json",
  "tsconfig.json",
  "package.json",
].join(' ')
const {watch} = require('./_helpers')

module.exports = {
  default: 'tslint -c tslint.json -p tsconfig.json',
  fix: {
    default: 'git add . && tslint --fix -c tslint.json -p tsconfig.json \'./src/**/*.{ts,tsx}\'',
    clean: 'tslint --fix -c tslint.json -p tsconfig.json \'./src/**/*.{ts,tsx}\'',
    watch: watch(filePaths, 'nps lint.fix.clean')
  },
  watch: {
    default: watch(filePaths, 'nps lint')
  },
  type: 'tsc -p tsconfig.json --noEmit',
}