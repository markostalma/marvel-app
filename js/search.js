var searchApp = angular.module("searchApp", []);

searchApp.filter("searchFor", function(){
	return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		
		rezultat = [];
		
		searchString = searchString.toLowerCase();
		
		angular.forEach(arr, function(tel){
			if(tel.name.toLowerCase().indexOf(searchString) !== -1){
				rezultat.push(tel);
			}
		});
		return rezultat;
	}
});

searchApp.controller("SearchController", function($scope){
	$scope.character = [
	{
		name: "Alcatel Idol 2",
		description: "Odlican telefon",
		image: "http://www.mobilnishop.com/kepek/Alcatel%20D5%20Pop%20OT-5038D%20Brown%20Front.jpg_tn.jpg"
	},
	{
		name: "ZTE Blade 3",
		description: "Solidan telefon",
		image: "http://media.engadget.com/img/products/508/awm5/awm5-100.jpg"
	},
	{
		name: "Lenovo 500",
		description: "Skup telefon",
		image: "http://media.engadget.com/img/products/512/azfl/azfl-100.jpg"
	}
	]
});