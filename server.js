const express = require("express");
const ConvertApi = require("convertapi");

const app = express();

// We will add your secret later on Render (important)
const convertapi = new ConvertApi(process.env.CONVERTAPI_SECRET);

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
