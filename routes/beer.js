var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Beer = require('../models/Beer.js');

/* GET ALL BEERS */
router.get('/', function(req, res, next) {
    Beer.find(function (err, beers) {
    if (err) return next(err);
    res.json(beers);
  });
});

/* GET SINGLE BEER BY ID */
router.get('/:id', function(req, res, next) {
    Beer.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BEER */
router.post('/', function(req, res, next) {
    Beer.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BEER */
router.put('/:id', function(req, res, next) {
    Beer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BEER */
router.delete('/:id', function(req, res, next) {
    Beer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;  

