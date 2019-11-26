const db = require("../models"); 

module.exports = {
  findAll: function(req, res){
    db.gBooks
      .find(req.query)
      .sort({ date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  }, 

  findById: function(req, res){
    db.gBooks
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  }, 

  create: function(req, res){
    db.gBooks
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 

  }, 

  remove: function(req, res){
    db.gBooks
      .findById({_id: req.params.id})
      .then(dbModel => dbModel.remove())
      .catch(err => res.status(422).json(err)); 
  }
}; 