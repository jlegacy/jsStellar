$App.View('testing', {
	initialize : function () {}, 
	init2 : function (data) {
		console.log(data); 
	},
	init : function () {
		console.log('in View testing');
	},

	getFormData : function (data, model, view) {
		console.log(data);
	},

	initTesting : function (data) {
		var template;
		template  = $App.LoadTemplate('templates/_template_entry.js');
		var jsonData = {};
		jsonData.title = 'It Works';
		jsonData.body = data.test;
		$('#body').html(template(jsonData));
	},

	loaddynamicButton : function () {

		$.get('templates/_template_entry.js', function (data) {
			var template = Handlebars.compile(data);
			var jsonData = {};
			jsonData.title = 'This is BadAss';
			jsonData.body = 'Testing BadAs';
			$('#body').html(template(jsonData));
		}, 'html')
	}

});
