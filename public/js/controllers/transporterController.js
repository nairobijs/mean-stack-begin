angular.module('transporterController', [])
    .controller('transporterController', function($scope, $http, $routeParams){
		
		$scope.params = $routeParams;
		
        $scope.formData = {};
        
        // add all transporters to transporters scope
        $http.get('/api/transporters')
            .success(function(data){
                $scope.transporters = data;
            })
            .error(function(err){
                console.log('couldn\'t get /api/transporters cuz: ' + err);
            });
        
        // create transporter    
        $scope.createTransporter = function(){
            $http.post('/api/transporters', $scope.formData)
                .success(function(data){
                    $('input').val('');
                    $scope.transporters = data;
                })
                .error(function(data){
                    console.log('couldn\'t post transporter: ' + err);
                });
        };
        
        // delete transporter
        $scope.deleteTransporter = function(id){
            $http.delete('/api/transporters/' + id)
                .success(function(data){
                    $scope.transporters = data;
                })
                .error(function(err){
                    console.log('Couldn\'t delete transporter: ' + err);
                });
        };
        
        // edit transporter
        $scope.editTransporter = function(id){
			// make transporter with id editable
			
			// render an li edit template or something..
		};
		
		// add delivery to transporter
		$scope.addDelivery = function(){
			// TODO
		};
        
    });
