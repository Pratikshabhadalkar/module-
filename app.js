
const {stringToBuffer, bufferToString,reverse,UpperCase} = require('./bufferUtils');

const buffer = stringToBuffer("Hello, world!");
console.log(buffer); 

const String = bufferToString(buffer);
console.log(String); 

reverse(buffer);

UpperCase(String);
