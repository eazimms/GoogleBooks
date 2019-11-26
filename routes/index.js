const path = require("path"); 
const router = require("express").Router(); 
const apiRoutes = require("./api");

router.use("/api", apiRoutes); 

routuer.use(function(req, res){
  res.sendfile(path.join(__dirname, "../client/build/index.html")); 
}); 

module.exports = router; 