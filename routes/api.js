const express = require ('express');
const router = express.Router();
const Cities = require('../models/cities');

// get a list of cities with the function geoNear from the db
router.get('/cities/near', function(req, res, next){
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

// get a list of cities based on filters from the db
router.get('/cities/all', function(req, res, next){

    var query = "{"
    if(req.query.name){
        query+="\"name\":\""+req.query.name+"\""
    }
    if(req.query.country){
        query+="\"country\":\""+req.query.country+"\""
    }
    if(req.query.population){
        query+="\"population\":"+req.query.population+""
    }
    if(req.query.timeZone){
        query+="\"timeZone\":\""+req.query.timeZone+"\""
    }
    /*if(!req.query.name && !req.query.country && !req.query.population && !req.query.timeZone){


    }*/
    query+="}";
    var formated_query = query.replace(/(["])(["])/g, '$1,$2');
    //console.log(formated_query);
    var object_query = JSON.parse(formated_query);
    //console.log(object_query);
    Cities.find(
        object_query

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
