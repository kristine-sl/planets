import Resizer from './resizer.service.js'
import Origin from './origin.service.js'
import Menus from './menus.service.js'

export default angular.module( 'services', [] )
	.service( 'Resizer', Resizer )
	.service( 'Origin', Origin )
	.service( 'Menus', Menus)
