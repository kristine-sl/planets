export default class SolarSystemCtrl {
	constructor ( $scope ) {

		const vm = this;
		
		this.planets = [
			{
				name: 'Mercury',
				color: '#D2D7D3'
			} , {
				name: 'Venus',
				color: '#F5D76E'
			} , {
				name: 'Earth',
				color: '#1abc9c'
			} , {
				name: 'Mars',
				color: '#CF3A24'	
			} , {
				name: 'Jupiter',
				color: '#BFBFBF'
			} , {
				name: 'Saturn',
				color: '#F3C13A'
			} , {
				name: 'Uranus',
				color: '#89C4F4'
			} , {
				name: 'Neptune',
				color: '#4B77BE'
			} , {
				name: 'Pluto',
				color: '#F27935'
			}
		]

		var $planetContainer = document.querySelector( '.planet-container' )

		$scope.$watch( function () {
            return $planetContainer.clientWidth
        }, function( value ) {
			vm.maxWidth = value
        } );

		// importDataFromCSV( file ) {


		// }
	}
}