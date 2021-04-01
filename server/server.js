const path = require('path');
const express = require('express');
var request = require("request");
const { parse } = require('path');
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

// connect to DB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://dbSebastian:Cancer19%2B@cluster0.1x6ms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true},
()=> console.log("connected to DB!"))

const app = express();
const PORT = 5000;


//Import Routes
const apiRouter = require('./routes/api')
const otherRouter = require('./routes/other')

app.use(cors());
app.use('/uploads', express.static('uploads'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use("/api", apiRouter);
app.use("/other", otherRouter)











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