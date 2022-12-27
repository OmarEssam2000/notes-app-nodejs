// setup server
var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var noteRoute = require("./route/noteRoute.js")
var app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyparser.json());

app.use("/api/v1" , noteRoute)



app.get("/" , function(req , res){
    res.send("Server started ............");
});

app.listen(3000 , () => {
    console.log(`Server Start ........`)
});