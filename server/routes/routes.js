var Transporter = require('../models/transporter');

module.exports = function(app){

    // ====== API =========
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
    
    // ===== application ======
    app.get('*', function(req, res) {
	    res.sendfile('./client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
    
    
    
//     Get all transporters JSON
//
// Transporter.find(function(err, transporters){
//     if(err) res.send(err);
//             
//     res.json(transporters);
// });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    