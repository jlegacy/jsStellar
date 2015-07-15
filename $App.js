(function () {

	$("body").on("click", "a", function (e) {
		e.preventDefault();
		console.log($(this).attr('href'));
		
		$AppBindIt($App.Routes.links, $(this).data('data'), 'href', $(this).attr('href'));
	});

	var $App = function () {};
	var $AppViewFuncs = [];
	var $AppControllerFuncs = [];
	var $AppModelFuncs = [];

	var $AppViewLoad = function (data, x) {
		_.each(data, function (obj) {
			if (obj.Name === x.controller) {
				this.$App.views = obj;
			}
		});
	}

	var $AppModelLoad = function (data, x) {
		_.each(data, function (obj) {
			if (obj.Name === x.controller) {
				this.$App.models = obj;
			}
		});
	}

	var $AppBindIt = function (routeBranch, data, routeName, pvalue) {
		var x;

		var myprop = routeName;
		var value = pvalue;
		var search_obj = {};
		search_obj[myprop] = value;

		x = _.findWhere(routeBranch, search_obj);

		if ($App.views) {
			if ($App.views.Name != x.controller) {
				$AppViewLoad($AppViewFuncs, x);
				$AppModelLoad($AppModelFuncs, x);
			}
		} else {
			$AppViewLoad($AppViewFuncs, x);
			$AppModelLoad($AppModelFuncs, x);
		}

		var funcToCall = _.findWhere($AppControllerFuncs, {
				Name : x.controller
			});

		var fireIt = funcToCall.Functions[x.method];
		fireIt(data);
	}

	$App.LoadTemplate = function (path) {
		var template = {};
		$.ajax({
			url : path,
			async : false,
			dataType : "text",
			success : function (data) {
				template = Handlebars.compile(data);
			},
		});

		return template;
	}

	$App.SetLink = function (el, data) {
		$(el).data('data', data);
	}

	$App.View = function (name, functions) {
		var functionObject = {};
		functionObject.Name = name;
		functionObject.Functions = functions;
		$AppViewFuncs.push(functionObject);
	}

	$App.Controller = function (name, functions) {
		var functionObject = {};
		functionObject.Name = name;
		functionObject.Functions = functions;
		$AppControllerFuncs.push(functionObject);
	}

	$App.Model = function (name, functions) {
		var functionObject = {};
		functionObject.Name = name;
		functionObject.Functions = functions;
		$AppModelFuncs.push(functionObject);
	}

	$App.Trigger = function (formData, action) {
		$AppBindIt($App.Routes.forms, formData, 'action', action);
	}

	$App.Fire = function (method, data) {
		$AppBindIt($App.Routes.events, data, 'event', method);
	}

	$App.Routes = $Routes.Routes;

	window.$App = $App
		return (this);
}
	());
