(function () {
	$App.View('index', {

		init : function (pdata) {

			$('#result').html($App.LoadTemplate('templates/_template_index.js', pdata));

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
				$App.Fire('testEvent', data);
			});

			//test Event
			$("button[id='page2-btn']").click(function () {
				var data = {};
				data.value1 = 'testEvent';
				$App.Fire('testPage2', data);
			});
		},

		testEvent : function (pdata) {
			$Utilities.logResults('event', pdata);
		},

		testLink : function (pdata) {
			$Utilities.logResults('link working', pdata);
		},

		testForm : function (pdata) {
			$Utilities.logResults('form working', pdata);
		}
	});

	//test button


}
	());