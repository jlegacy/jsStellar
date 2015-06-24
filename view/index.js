$App.View('index', {
	
	testForm : function (pdata) {
		
		$.get('templates/_template_entry.js', function (data) {
			var template = Handlebars.compile(data);
			var jsonData = {};
			jsonData.value1 = pdata.value1;
			jsonData.value2 = pdata.value2;
			$('#result').html(template(jsonData));
		}, 'html')
	}

});
