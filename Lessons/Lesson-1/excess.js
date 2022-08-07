
const arrayInfo = require('./modules');

const {people} = require('./modules')
const os = require('os')
console.log(arrayInfo.people)
console.log(arrayInfo.basicInformation)
console.log( "The Informations are : "+  " " + people)
console.log(os);
console.log(os.platform() +" " + os.homedir())

