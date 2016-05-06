export default class SolarSystemCtrl {

	constructor ( $scope, $timeout, $interval, $http, $filter, $window, Resizer, Menus ) {

		const vm = this
		this.margin = 15
		this.menus = Menus

		$scope.$watch( () => {
			return Resizer.key
		}, key => {
			vm.calculatePlanetSize( key )
		} )

		this.sunContainerWidth = document.querySelector( '.sun-container' ).clientWidth
		
		this.planets = [
			{
				name: 'Mercury',
				color: '#D2D7D3', 
				size: 0
			} , {
				name: 'Venus',
				color: '#F5D76E', 
				size: 0
			} , {
				name: 'Earth',
				color: '#1abc9c', 
				size: 0
			} , {
				name: 'Mars',
				color: '#CF3A24', 
				size: 0
			} , {
				name: 'Jupiter',
				color: '#BFBFBF', 
				size: 0
			} , {
				name: 'Saturn',
				color: '#F3C13A', 
				size: 0
			} , {
				name: 'Uranus',
				color: '#89C4F4', 
				size: 0
			} , {
				name: 'Neptune',
				color: '#4B77BE', 
				size: 0
			} , {
				name: 'Pluto',
				color: '#F27935', 
				size: 0
			}
		]

		this.sortedPlanets = () => {
			return $filter( 'orderBy' )( this.planets, Resizer.sortBy );
		}

		$http.get( 'json/parameters-planet.json' ).then( ( results ) => { 
			// console.log( results.data )
			results.data.forEach( planet1 => {
				this.planets.forEach( planet2 => {
					if( planet1.name === planet2.name ) {

						planet2.radius = planet1.radius						// kilometer 
						planet2.mass = planet1.mass							// kilograms
						planet2.volume = planet1.volume						// kilometer ^ 3
						planet2.minTemperature = planet1.minTemperature		// kelvin
						planet2.maxTemperature = planet1.maxTemperature		// kelvin 
						planet2.surfaceGravity = planet1.surfaceGravity		// g-force 
						planet2.orbitalPeriod = planet1.orbitalPeriod		// days 
						planet2.orbitalSpeed = planet1.orbitalSpeed			// kilometers / second 
						planet2.moons = planet1.moons						// quantity
						planet2.perihelion = planet1.perihelion				// astronomical unit 
						planet2.aphelion = planet1.aphelion					// astronomical unit
						planet2.rotationPeriod = planet1.rotationPeriod		// hoursm

																			// percentage by volume (all)
						planet2.oxygen = planet1.oxygen * planet1.volume
						planet2.carbonDioxide = planet1.carbonDioxide * planet1.volume
						planet2.carbonMonoxide = planet1.carbonMonoxide * planet1.volume
						planet2.nitrogren = planet1.nitrogren * planet1.volume
						planet2.sulfurDioxide = planet1.sulfurDioxide * planet1.volume
						planet2.argon = planet1.argon * planet1.volume
						planet2.waterVapor = planet1.waterVapor * planet1.volume
						planet2.helium = planet1.helium * planet1.volume
						planet2.hydrogen = planet1.hydrogen * planet1.volume
						planet2.neon = planet1.neon * planet1.volume
						planet2.sodium = planet1.sodium * planet1.volume
						planet2.potassium = planet1.potassium * planet1.volume
					}
				} )
			} )
		} )

		var $planetContainer = document.querySelector( '.planet-container' )

		// angular.element($window).bind('resize', ()->
		//  	$scope.$apply();
		// )

		$scope.$watch( () => {
            return $planetContainer.clientWidth
        }, ( value ) => {
			vm.maxWidth = value
        } );

        var currentSizeParameter = 'radius'; 
        const outerSpacing = 100;

		// Initial value
        $timeout(function() { vm.calculatePlanetSize() }, 10)

        this.calculatePlanetSize = ( parameter ) => {

        	if( !parameter ) {
        		parameter = currentSizeParameter
        	} else {
        		currentSizeParameter = parameter 
        	}

        	this.margin = this.maxWidth / 60; 
        	var totalMargin = this.margin * 2 * this.planets.length;
        	var totalWidth = this.maxWidth - totalMargin - outerSpacing; 
        	
        	var parameterTotal = 0; 

        	this.planets.forEach( planet => {
        		parameterTotal += planet[ parameter ]
        	} )

        	var widthPrValue = totalWidth / parameterTotal; 

        	this.planets.forEach( planet => {
        		planet.size = widthPrValue * planet[ parameter ]
        	} )
        }

        this.calculateLeftValue = ( index ) => {
        	var value = outerSpacing / 2
        	var newIndex;

        	for ( var i = 0; i < this.sortedPlanets().length; i++ ) {
        		if ( this.sortedPlanets()[ i ] .name === this.planets[ index ].name ) {
        			newIndex = i;
        			break;
        		}
        	}

        	for ( var i = 0; i < newIndex; i++ ) {
        		value += this.sortedPlanets()[ i ].size + this.margin * 2;
        	}

        	return value;
        }

        this.toggleMenus = () => {

        	this.menus.hidden = !this.menus.hidden

	    	$timeout( () => {  
	        	this.maxWidth = $planetContainer.clientWidth
	        	this.calculatePlanetSize( currentSizeParameter )
	    	}, 1 )

        }
	}
}