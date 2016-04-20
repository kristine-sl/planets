import angular from 'angular'
import controllers from './controllers/controllers.module.js'
import 'angular-drag-and-drop-lists'

export default angular.module( 'app', [
	'dndLists',
	controllers.name
] )