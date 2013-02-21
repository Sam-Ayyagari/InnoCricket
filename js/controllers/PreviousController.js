innoCricket.controller('PreviousController',
	function PreviousController($scope, $routeParams, $http){	
	console.log('Previous match');
	$scope.myData = [{name: "Sameer", runs: 50},
                     {name: "Murali", runs: 43},
                     {name: "Jawahar", runs: 27},
                     {name: "Nephi", runs: 29},
                     {name: "Enos", runs: 34}];
    $scope.gridOptions = { 
        data: 'myData',
        enableCellSelection: true,
        canSelectRows: false,
        columnDefs: [{field: 'name', displayName: 'Name', enableFocusedCellEdit: true}, {field:'runs', displayName:'Runs'}]
    };	

   	$scope.save = function(user){
      $scope.myData.push(angular.copy(user));
    };	
		
		
});