const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantsSchema = new Schema({
  res_name: { type: String, required: true },
  img_url: { type: String, required: true },
  rating: { type: Number, required: true },
  tags: { type: [String], required: true },
  address: { type: String, required: true },
  zomato_url: { type: String, required: true }
}, { 
  timestamps: true,
});

const Restaurants = mongoose.model('Restaurants', restaurantsSchema);

module.exports = Restaurants;