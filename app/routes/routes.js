var Transporter = require('../models/transporter');
var Delivery = require('../models/delivery');

module.exports = function(app){
	
	// ====================
    // ====== API =========
    // ====================
    
    // TRANSPORTERS
    //==================================
    // all transporters
    app.get('/api/transporters', function(req, res){
        Transporter.find(function(err, transporters){
            if(err) res.send(err);
            
            res.json(transporters);
        });
    });
    
    // create transporter
    app.post('/api/transporters', function(req, res){
        Transporter.create({
            name: req.body.name,
            natl_id_num: req.body.natl_id_num,
            phone: req.body.phone
        }, function(err, transporter){
            if(err) res.send(err);
            
            Transporter.find(function(err, transporters){
                if(err) res.send(err);
            
                res.json(transporters);
            });
        });
    });
    
    // delete transporter
    app.delete('/api/transporters/:transporter_id', function(req, res){
        Transporter.remove({
            _id: req.params.transporter_id
        }, function(err, transporter){
            if (err) res.send(err);
            
            Transporter.find(function(err, transporters){
                if(err) res.send(err);
                
                res.json(transporters);
           }); 
        });
    });
    // =================================================
    // DELIVERIES
    // all deliveries
    app.get('/api/deliveries', function(req, res){
        Delivery.find(function(err, deliveries){
            if(err) res.send(err);
            
            res.json(deliveries);
        });
    });
    
    // create delivery
    app.post('/api/deliveries', function(req, res){
        Delivery.create({
            //~ name: req.body.name,
            //~ natl_id_num: req.body.natl_id_num,
            //~ phone: req.body.phone
        }, function(err, delivery){
            if(err) res.send(err);
            
            Delivery.find(function(err, deliveries){
                if(err) res.send(err);
            
                res.json(deliveries);
            });
        });
    });
    
    // delete delivery
    app.delete('/api/deliveries/:delivery_id', function(req, res){
        Delivery.remove({
            _id: req.params.delivery_id
        }, function(err, delivery){
            if (err) res.send(err);
            
            Delivery.find(function(err, deliveries){
                if(err) res.send(err);
                
                res.json(deliveries);
           }); 
        });
    });
    
    // ============================
    // ==== Application routes ====
    // ============================
    
    app.get('/*', function(req, res) {
	    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    