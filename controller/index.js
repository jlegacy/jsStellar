$App.Controller('index', { 
	
	testForm : function (data) {
		$App.models.Functions.testForm(data, function (data) {
			$App.views.Functions.testForm(data);
		});

	}
});
