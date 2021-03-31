const path = require('path');
const express = require('express');
var request = require("request");
const { parse } = require('path');

const app = express();
const PORT = 5000;

app.get("/", (req,res) => res.send("hello world!"));

app.get("/practice", (req, res) => {
    request(
    "https://parallelum.com.br/fipe/api/v1/carros/marcas",
    (err, response, body) => {
        if(!err && response.statusCode == 200){
            let parseBody = JSON.parse(body);
            let audi = parseBody[6]
            res.send(audi)
        }
      }

    );
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))