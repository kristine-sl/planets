export default class ParameterCtrl {

	constructor ( Resizer, Origin, Menus, $timeout, $interval, $scope ) {

		this.dataTab = 0, this.chemistryTab = 1;  
		this.menus = Menus; 

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