export default class Menus { 

	constructor () {
		this.hidden = false; 

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
	}
}