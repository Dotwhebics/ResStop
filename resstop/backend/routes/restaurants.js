const router = require('express').Router();
let Restaurants = require('../models/restaurants.model');

router.route('/').get((req, res) => {
  Restaurants.find()
    .then(restaurants => res.json(restaurants))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/restaurants').get((req, res) => {
    const req_restaurant = req.query.restaurant;
    Restaurants.find( { "res_name": req_restaurant } )
      .then(restaurants => res.json(restaurants))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add_restaurant').post((req, res) => {
    const res_name = req.body.res_name;
    const img_url = req.body.img_url;
    const rating = Number(req.body.rating);
    const tags = req.body.tags;
    const address = req.body.address;
    const zomato_url = req.body.zomato_url;
  
    const newRestaurants = new Restaurants({
        res_name,
        img_url,
        rating,
        tags,
        address,
        zomato_url
    });
  
    newRestaurants.save()
      .then(() => res.json('Restaurant added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete_restaurant').delete((req, res) => {
    const req_restaurant = req.query.restaurant;

    Restaurants.deleteOne( { "res_name": req_restaurant } )
    .then(() => res.json('Restaurant deleted!!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/count').get((req, res) => {
    Restaurants.find().countDocuments()
      .then(count => res.json(count))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;