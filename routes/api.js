const express = require ('express');
const router = express.Router();
const Cities = require('../models/cities');

// get a list of cities from the db
router.get('/cities', function(req, res, next){
    /* Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    }); */
    Cities.aggregate(

        [
            {
              $geoNear: {
                 near: { type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)] },
                 distanceField: "dist.calculated",
                 maxDistance: 100000,
                 spherical: true
              }
            }
         ]
        /*{type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}*/
    ).then(function(city){
        res.send(city);
    }).catch(next);
});

// add a new city to the db
router.post('/cities', function(req, res, next){
    Cities.create(req.body).then(function(city){
        res.send(city);
    }).catch(next);
});

// update a city in the db
router.put('/cities/:id', function(req, res, next){
    Cities.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Cities.findOne({_id: req.params.id}).then(function(city){
            res.send(city);
        });
    }).catch(next);
});

// delete a city from the db
router.delete('/cities/:id', function(req, res, next){
    Cities.findByIdAndRemove({_id: req.params.id}).then(function(city){
        res.send(city);
    }).catch(next);
});

module.exports = router;
