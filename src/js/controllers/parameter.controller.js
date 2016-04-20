export default class SolarSystemCtrl {
	constructor () {

		this.dataTab = 0, this.chemistryTab = 1; 

		this.parameters = [
			[ 
				'Mass',
				'Volume',
				'Mean radius',
				'Surface temperature',
				'Surface gravity',
				'Orbital period',
				'Orbital speed',
				'Number of moons',
				'Age'
			] , [
				'Carbon dioxide',
				'Nitrogen',
				'Sulfur dioxide',
				'Argon',
				'Water vapor',
				'Carbon monoxide',
				'Helium',
				'Neon',
				'Oxygen'
			]
		]

		this.input = {
			order: {
				item: [], 
				origin: null
			} ,
			size: {
				item: [], 
				origin: null
			}
		}

		this.activeTab = this.dataTab;

		this.droppedInInput = ( input, item ) => {

			console.log( 'Dropped' ); 

			// if( input.item.length != 0 ) {
			// 	input.origin.push( item )
			// 	input.item.splice( 0, 1 ); 
			// }

			input.item.push( item );

			return true; 
		}

		this.moveByClickToInput = ( origin, index ) => {

			console.log(  'moving' )

			var item = origin[ index ]
			origin.splice( index, 1 )

			// If both are filled, do not remove 
			if( this.input.order.length === 0) {
				this.input.order.push( item )
			} else if( this.input.size.length === 0 ) {
				this.input.size.push( item )
			} 
		}
		this.currentParameter; 

		this.hideParameter = () => {

			
		}
	}
}