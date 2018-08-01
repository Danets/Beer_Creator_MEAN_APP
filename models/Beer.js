var mongoose = require('mongoose');

var BeerSchema = new mongoose.Schema({
    id: Number,
    name: String,
    img: String,
    ingredients: [String],
  },{ versionKey: false });

  module.exports = mongoose.model('Beer', BeerSchema);  