function stringToBuffer(inputStr) 
{
    return Buffer.from(inputStr);
}

function bufferToString(Buffer) 
{
    return Buffer.toString();
  
} 

function reverse(buffer)
{
console.log(buffer.reverse());
}

function UpperCase(string)
{
console.log(string.toString().toUpperCase());
}
module.exports =
 {
    stringToBuffer, bufferToString,reverse,UpperCase,

 }
   
   








