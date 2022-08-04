
const path = require('path')
const os = require('os')
const myPath = 'F:/Node js/nodefile/code_module/coreModule.js'

console.log(path.basename(myPath))
console.log(path.dirname(myPath))
console.log(path.extname(myPath))
console.log(path.parse(myPath))
console.log(os.platform());
console.log(os.homedir())
console.log(os.freemem())
console.log(os.cpus())