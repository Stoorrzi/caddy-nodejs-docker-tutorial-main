const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");


app.use(cors())



app.get("", function (req, res) {
  res.send("Test");
});



//        HTTP Connection
const host = '0.0.0.0';
const port = 4000;

const server = app.listen(port, host, () => {
  console.log('Listening on port %s', server.address().port)
})


