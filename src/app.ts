import "reflect-metadata"
import express = require('express')
import cors = require('cors')
import bodyParser = require("body-parser");

const app = express()

app.use(
  cors({
    credentials:true,
    origin:'http://localhost:3000'
  })
);

app.use(
  'graphql',
  bodyParser
)
app.listen(3000);
console.log(`server running on port:3000`)