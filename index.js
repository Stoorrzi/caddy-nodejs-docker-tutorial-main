const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const bodyParser = require("body-parser");
const cors = require("cors");
const https = require("https")
const fs = require("fs")
const path = require("path")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/online", function (req, res) {
  const obj = {
    status: "online",
  };
  res.send(JSON.stringify(obj));
});

app.post("/payment", async (req, res) => {
  let { amount, id, tokens, uid, bill } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: bill + "/" + uid,
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

//        HTTP Connection
const host = '0.0.0.0';
const port = 4000;

const server = app.listen(port, host, () => {
  console.log('Listening on port %s', server.address().port)
})