const router = require('express').Router();
let Comments = require('../models/comments.model');

router.route('/').get((req, res) => {
  const req_restaurant = req.query.restaurant;

  Comments.find( { "res_name" : req_restaurant } )
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add_comment').post((req, res) => {
  const res_name = req.body.res_name;
  const comment = req.body.comment;

  const newComments = new Comments({
    res_name,
    comment
});

  newComments.save()
    .then(() => res.json('Comment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/count').get((req, res) => {
    Comments.find().countDocuments()
      .then(count => res.json(count))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;