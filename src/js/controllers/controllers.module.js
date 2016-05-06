import SolarSystemCtrl from './solar-system.controller.js'
import ParameterCtrl from './parameter.controller.js'
import SunController from './sun.controller.js'

export default angular.module( 'controllers', [] )
	.controller( 'SolarSystemCtrl', SolarSystemCtrl )
	.controller( 'ParameterCtrl', ParameterCtrl )
	.controller( 'SunController', SunController )