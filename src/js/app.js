import angular from 'angular'
import controllers from './controllers/controllers.module.js'
import services from './services/services.module.js'
import 'angular-drag-and-drop-lists'

export default angular.module( 'app', [
	'dndLists',
	controllers.name, 
	services.name
] )