const db = require("../models"); 
// Function to find all books
module.exports = {
  findAll: function(req, res){
    db.gBooks
      .find(req.query)
      .sort({ date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  }, 
// Find by ID
  findById: function(req, res){
    db.gBooks
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  }, 
// 
  create: function(req, res){
    db.gBooks
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 

  }, 

  update: function(req, res) {
    db.gBooks
      .findOneAndUpdate({_id: req.params.id}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  },
// Delete
  remove: function(req, res){
    db.gBooks
      .findById({_id: req.params.id})
      .then(dbModel => dbModel.remove())
      .catch(err => res.status(422).json(err)); 
  }
}; 