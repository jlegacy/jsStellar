$App.Controller('testing', { 
	
	init2 : function (data) {
		console.log(data, 'in Controller testing');
		$App.models.Functions.init2(data, function (data) {
			$App.views.Functions.init2(data);
		});

	},
	init : function (data) {
		console.log(data, 'in Controller testing');
	},
	
	initTesting : function (data) {
		$App.views.Functions.initTesting(data);
	},

	setFormData: function (data) {
		$App.views.Functions.getFormData(data);
	},
	
	dynamicButton : function (data) {
		$App.views.Functions.dynamicButton(data);
	}

});
