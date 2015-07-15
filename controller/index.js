$App.Controller('index', { 

	testForm : function (data) {
		$App.models.Functions.testForm(data, function (data) {
			$App.views.Functions.testForm(data);
		});

	},
	
	testLink : function (data) {
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
