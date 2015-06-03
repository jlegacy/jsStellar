$App.View('testing', {
	initialize : function () {},
	init2 : function (data, model, view) {
		console.log(data);
	},
	init : function () {
		console.log('in View testing');
	},

	getFormData : function (data, model, view) {
		console.log(data);
	},

	initTesting : function () {

		$.get('templates/_template_entry.js', function (data) {
			var template = Handlebars.compile(data);
			var jsonData = {};
			jsonData.title = 'It Works';
			jsonData.body = 'Testing in the body';
			$('#body').html(template(jsonData));
		}, 'html').done(function () {

			$("button[name='dynamicButton']").click(function () {
				//	$App.Fire('dynamicButton');

				// Get all the forms elements and their values in one step
				$App.Trigger($('#testForm1'), 'setFormData');
			});

			//set up click event//
			var data = {}
			data.id = 'testId';
			data.test = 'testingIt';
			$App.SetLink($('#helpLink'), data);

		});

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
