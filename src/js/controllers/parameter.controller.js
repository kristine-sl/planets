export default class ParameterCtrl {

	constructor ( Resizer, Origin, Menus, $timeout, $interval, $scope ) {

		this.dataTab = 0, this.chemistryTab = 1;  
		this.menus = Menus; 

		this.parameters = [
			[ 
				{
					name: 'Mass',
					key: 'mass'
				},{
					name: 'Volume',
					key: 'volume'
				},{
					name: 'Mean radius',
					key: 'radius'
				},{
					name: 'Min. Surface temperature',
					key: 'minTemperature'
				},{
					name: 'Max. Surface temperature',
					key: 'maxTemperature'
				},{
					name: 'Surface gravity',
					key: 'surfaceGravity'
				},{
					name: 'Orbital period',
					key: 'orbitalPeriod'
				},{
					name: 'Orbital speed',
					key: 'orbitalSpeed'
				},{
					name: 'Number of moons',
					key: 'moons'
				},{
					name: 'Perihelion',
					key:'perihelion'
				},{
					name: 'Aphelion',
					key:'aphelion'
				},{
					name: 'Sidereal rotation period',
					key:'rotationPeriod'
				}
			],[
				{
					name: 'Oxygen',
					key: 'oxygen'
				},{
					name: 'Carbon dioxide',
					key: 'carbonDioxide'
				},{
					name: 'Carbon monoxide',
					key: 'carbonMonoxide'
				},{
					name: 'Nitrogen',
					key: 'nitrogren'
				},{
					name: 'Sulfur dioxide',
					key: 'sulfurDioxide'
				},{
					name: 'Argon',
					key: 'argon'
				},{
					name: 'Water vapor',
					key: 'waterVapor'
				},{
					name: 'Helium',
					key: 'helium'
				},{
					name: 'Hydrogen',
					key: 'hydrogen'
				},{
					name: 'Sodium',
					key: 'sodium'
				},{
					name: 'Potassium',
					key: 'potassium'
				}
			]	
		]

		this.input = {
			order: {
				item: [], 
				origin: null, 
				name: 'order'
			} ,
			size: {
				item: [], 
				origin: null, 
				name: 'size'
			}
		}

		this.activeTab = this.dataTab;

		this.droppedInInput = ( input, item ) => {

			if( input.item.length > 0 ) {
				input.origin.push( input.item[0] )
				input.item.splice( 0, input.item.length )
			}

			input.item.push( item )

			switch ( input.name ) {
				case 'order':
					Resizer.sortBy = item.key
					break
				case 'size':
					Resizer.key = item.key
					break
			}

			input.origin = Origin.currentParent
			$scope.$apply() // to make the drop register
		}

		this.hideParameter = ( parent, index ) => {

			parent.splice( index, 1 )
			Origin.currentParent = parent
		}
	}
}