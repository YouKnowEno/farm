const fs = require('fs');
const http = require('http');

//////////////////////////////////////////////////////////////////
// FILES

//Blocking, synchronous Read-Write
// const input = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(input);
// const output = `Avocados are: ${input}\nCreated on: ${Date.now()}.\nBy Yvonne`;
// fs.writeFileSync('./txt/output.txt', output);
// console.log("output.txt File Created in txt dir.");

//Non-blocking, asynchronous Read-Write
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//        console.log(data2);
//        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//            console.log(data3);
//
//            fs.writeFile('./txt/concatenation.txt', `${data2}\n ${data3}`, 'utf-8', err => {
//                console.log('File Written.');
//            });
//
//        });
//    }) ;
// });

//////////////////////////////////////////////////////////////////
// SERVER
const server = http.createServer((req, res) => {
    res.end('Hello from the server!')
});


const port = 3000;
server.listen(port, '127.0.0.1', () => {
    console.log(`Listening to requests on port ${port}.`);
});













