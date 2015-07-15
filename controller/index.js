(function() {

$App.Controller('index', { 
	
	testForm : function (data) {
		$App.models.Functions.testForm(data, function (data) {
			$App.views.Functions.testForm(data);
		});

	},
	
	init : function (data) {
		$App.models.Functions.init(data, function (data) {
			$App.views.Functions.init(data);
		});

	},
	
	testLink : function (data) {
		console.log('calling test link',data);
		$App.models.Functions.testLink(data, function (data) {
			$App.views.Functions.testLink(data);
		});

	},
	
	testEvent : function (data) {
		$App.models.Functions.testEvent(data, function (data) {
			$App.views.Functions.testEvent(data);
		});

	}
});
}());
