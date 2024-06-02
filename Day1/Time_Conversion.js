'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
      const s2 = s.split(":");
  let hours = s2[0];
  let minutes = s2[1];
  let str3 = s2[2];
  let seconds;
    let b = str3.charAt(str3.length-2)+str3.charAt(str3.length-1);
    
    if(Number.parseInt(str3)<10)
    {
        seconds= "0"+Number.parseInt(str3);
    }
    else{
        seconds = Number.parseInt(str3);
    }
    if(Number.parseInt(hours)<12 && b === 'PM')
    {
        if(Number.parseInt(hours)<12)
        {
        hours = 12 + Number.parseInt(hours);
        }
    }
    if(b==='AM')
    {
       if(hours === "12")
        {
            hours = "00";
        }
    }
    let result = hours+ ":"+minutes+":"+seconds;
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
