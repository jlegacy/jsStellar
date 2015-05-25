(function () {
	var $Routes = function () {};
	
	$Routes.Routes = {
		events : [
			// - Related Items
			{
				event : 'initTesting',
				controller : 'testing',
				method : 'initTesting'
			}, {
				event : 'test3',
				controller : 'testing2',
				method : 'init2'
			},
			
			{
				event : 'dynamicButton',
				controller : 'testing',
				method : 'dynamicButton'
			},
		],
		forms : [
			// - Related Items
			{
				action : 'setFormData',
				controller : 'testing',
				method : 'setFormData'
			}
		]
	}

	window.$Routes = $Routes
		return (this);
}
	());
