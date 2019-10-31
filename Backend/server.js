const express =  require('express');
const server = express();
const fs = require('fs');
const filmRouter = require('./src/router/fimls');
const userRouter = require('./src/router/users');
const mongoose = require('mongoose');
const cors = require('cors');

server.use(cors());
server.use(express.static('uploads'));
server.set('view engine', 'ejs');


server.use('/user', userRouter);
server.use('/film', filmRouter);

server.use('/', (req, res) => {
    res.sendFile(__dirname + "/a.html");
});


server.get('/', function(req, res) {
    res.render('pages/about');
});


mongoose.connect("mongodb+srv://tuan:tuan@cluster0-uq3xz.mongodb.net/Movie", () => {
    console.log("Films Database is connected");
});


// server.get('/about.html', (req, res) => {
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString());
//     });
// });




server.listen(3001, () => {
    console.log('Express listening on port 3001');
});