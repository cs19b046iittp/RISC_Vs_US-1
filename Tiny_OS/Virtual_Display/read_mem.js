// const fs = require('fs')
var display_div = document.getElementById("display")

const NUM_OF_ROW_PIXELS = 3
const NUM_OF_COL_PIXELS = 2

var row = new Array(NUM_OF_COL_PIXELS)
for (let i = 0; i < row.length; i++) {
    row[i] = new Array(NUM_OF_ROW_PIXELS)
}

for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < row[i].length; j++) {
        row[i][j] = 0
    }
}
var pixel = "<svg >"
for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < row[i].length; j++) {
        // x = j*0.78 
        // y = i*0.26

        x = j*9
        y = i*9
        // pixel = pixel+'<rect x = "' + x+'" y = "' + y + '" width="0.26" height="0.78" style="padding:"0.5px"; fill:rgb(0,0,255);" />'
        
        pixel = pixel+'<rect x = "' + x+'" y = "' + y + '" width="9" height="9" style="padding:"0.5px"; fill:rgb(0,0,255);" />'

        console.log("i=", i, "j=", j, "x=", x, "y=", y)
    }
}
pixel = pixel + '</svg>'

// for(var i = 0; i< 100; i++){
//     // x = x + "<p " + ">Heading " + i + "</p>"
//     x = x+'<svg ><rect width="0.26vw" height="0.78vh" style="fill:rgb(0,0,255);" /></svg>'
// }




document.getElementById("display").innerHTML = pixel

// const remote = require('electron').remote;
// const app = remote.app;


// app.console.log('This will output to the main process console.');

// var nodeConsole = require('console');
// var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
// myConsole.log('Hello World!');

// const con = require('electron').remote.getGlobal('console')
// con.log('This will be output to the main process console.')


// display_div.style.display = 'none'

// const con = require('electron').remote.getGlobal('console')

// con.log('This will be output to the main process console.')

// var log = require('electron-log');

// log.info('Hello, log');
// log.error('Damn it, an error'); 
// //128 x 384


// var interval = setInterval(() => {
//     // Write logic for reading file here
//     data = fs.readFileSync('./memory_map.txt')
//     display_div.innerHTML = data

//     display_div.style.display = 'none'
//     // display_div.style.display = 'block'

// }, 500)


console.log('hello')