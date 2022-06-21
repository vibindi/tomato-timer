const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/timer', (req, res) => {
    //console.log(req.params.time);
    res.render('timer')
});

app.listen(port, () => {
    console.log("Server started on port " + port);
});