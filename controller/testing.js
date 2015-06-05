$App.Controller('testing', {

	init2 : function (data, models, views) {
		var _this = this;
		console.log(data, 'in Controller testing');
		models.Functions.init2(data, function (data) {
			views.Functions.init2(data);
		});

	},
	init : function (data) {
		console.log(data, 'in Controller testing');
	},
	
	initTesting : function (data, models, views) {
		views.Functions.initTesting(data, models, views);
	},

	setFormData: function (data, models, views) {
		views.Functions.getFormData(data, models, views);
	},
	
	dynamicButton : function (data, models, views) {
		views.Functions.dynamicButton(data, models, views);
	}

});
