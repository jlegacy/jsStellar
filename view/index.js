$App.View('index', {

	testForm : function (pdata) {
		$Utilities.logResults('form working', pdata);
		$.get('templates/_template_entry.js', function (data) {
			var template = Handlebars.compile(data);
			var jsonData = {};
			jsonData.value1 = pdata.value1;
			jsonData.value2 = pdata.value2;
			$('#result').html(template(jsonData));
		}, 'html')
	},

	testEvent : function (pdata) {
		$Utilities.logResults('event', pdata);
	},

	testLink : function (pdata) {
		$Utilities.logResults('link working', pdata);
	}
});
