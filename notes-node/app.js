console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');


var myArray = [21,2,1,1,1,2,1,2,1,21,5];

var myArrayFiltered = _.uniq(myArray);

console.log(myArrayFiltered);

//var user = os.userInfo().username;

// console.log(notes.addNote());

//console.log(notes.add(1,2));

// fs.appendFile('greetings.txt', `Hello Mister ${user.username}`, function (err) {
//     if (err) {
//         console.error(err);
//     }
// });

//fs.appendFileSync('greetings.txt', 'Hello World!');

