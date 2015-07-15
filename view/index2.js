(function () {

	$App.View('index2', {

		init : function (pdata) {

			$('#result').empty();
			$('#result').html($App.LoadTemplate('templates/_template_index2.js', pdata));

			//test Event
			$("button[id='return-btn']").click(function () {
				var data = {};
				data.value1 = 'testEvent';
				$App.Fire('init', data);
			});
			
				$("button[id='scan-btn']").click(function () {
				alert('button working');
			});
		},

	});

}());
