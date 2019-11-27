// Adding in all the stuff I will need to make this run
const express = require("express"); 
const mongoose = require("mongoose"); 
const routes = require("./routes"); 
const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(express.urlencoded({extneded: true})); 
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); 
}

app.use(routes); 
// Not forgetting Mongolab this time so there isn't an issue deploying on heroku. 
mongoose.connect(process.env.MONGOLAB_URI|| "mongodb://localhost/googlebooks"); 

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`); 
}); 