//A simple website calculator....
const express = require('express');
const bodyParcer = require("body-parser");

const app = express();
// A must use anytime we want to use bodyParser....
app.use(bodyParcer.urlencoded({extended: true}));

// Calculator.... (index.html)
app.get("/", function (req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
       
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;
    res.send("The result of the calculator is " + result);
});

// bmiCalculator......
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
});


//spin up this server.....
app.listen(3000, function (){
  console.log("Server is running on 3000.");
});  