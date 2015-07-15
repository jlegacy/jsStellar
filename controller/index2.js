(function () {

	$App.Controller('index2', {

		init : function (data) {
			$App.models.Functions.init(data, function (data) {
				$App.views.Functions.init(data);
			});

		}

	});

}());
