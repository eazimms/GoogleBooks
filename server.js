const express = require("express"); 
const mongoose = require("mongoose"); 
const routes = require("./routes"); 
const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(express.urlencoded({extneded: true})); 
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client")); 
}

app.use(routes); 

mongoose.connect(process.env.MONGOLAB|| "mongodb://localhost/googlebooks"); 

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`); 
}); 