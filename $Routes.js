(function () {
	var $Routes = function () {};
	
	$Routes.Routes = {
		events : [
			// - Related Items
			{
				event : 'testButton',
				controller : 'index',
				method : 'testButton'
			},
			{
				event : 'testEvent',
				controller : 'index',
				method : 'testEvent'
			},
		],
		forms : [
			// - Related Items
			{
				action : 'testForm',
				controller : 'index',
				method : 'testForm'
			}
		],
		  links: [
        // - Application
        {href: 'testLink/:value1/:value2', controller: 'index', method: 'testLink'}
		]
	}

	window.$Routes = $Routes
		return (this);
}
	());
