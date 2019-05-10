const fs = require('fs')

const mkNewDirectory = (target) => fs.existsSync(target) == false

const watch = (paths, func) => 'chokidar '+paths
  +' -c \"'+func
  +'\" --initial --verbose'
  +' -d 300'  // debounce
  // +' -t 100'   // throttle

module.exports = {
  mkNewDirectory,
  watch,
}