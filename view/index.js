(function (){
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

//test button
	$("button[id='testButton']").click(function () {
		data = {};
		data.test = 'test button fired';
		$App.Fire(data);
	});
	
	//test Link
	var data = {}
	data.value1 = 'test';
	data.value2 = 'test2';
	$App.SetLink($('#testLink'), data);
	
	//test Form
	$("input[id='testFormButton']").click(function () {
		var data = $('form#testForm').serializeObject();
		$App.Trigger(data, $('#testForm').attr('action'));
	});
	
	//test Event
	$("input[id='testEventButton']").click(function () {
		var data = {};
		data.value1 = 'testEvent';
		$App.Fire('testEvent',data);
	});

}());
