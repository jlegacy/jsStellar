(function () {

	$("body").on("click", "a", function (e) {

		e.preventDefault();
		bindFunctionsData($App.Routes.links, $(this).data('data'), 'href', $(this).attr('href'));

	});

	var $App = function () {};
	var $AppViewFuncs = [];
	var $AppControllerFuncs = [];
	var $AppModelFuncs = [];

	function bindFunctionsData(routeBranch, data, routeName, pvalue) {
		var requireJSName;
		var models;
		var views;
		var controllers;
		var funcName,
		x,
		controllerName;

		var myprop = routeName;
		var value = pvalue;
		var search_obj = {};
		search_obj[myprop] = value;

		x = _.findWhere(routeBranch, search_obj);

		_.each($AppViewFuncs, function (obj, value) {
			if (obj.Name === x.controller) {
				views = obj;
			}
		});

		_.each($AppModelFuncs, function (obj, value) {
			if (obj.Name === x.controller) {
				models = obj;
			}
		});

		var funcToCall = _.findWhere($AppControllerFuncs, {
				Name : x.controller
			});

		var fireIt = funcToCall.Functions[x.method];
		fireIt(data, models, views);
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
			error : function (data) {
				console.log(data);
			}
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

	$App.Trigger = function (values, action) {

		var formData = $(values).serializeObject();

		var requireJSName;
		var models;
		var views;
		var controllers;
		var funcName,
		x,
		y,
		controllerName;

		bindFunctionsData($App.Routes.forms, formData, 'action', action);
	}

	$App.Fire = function (method, data) {
		bindFunctionsData($App.Routes.events, data, 'event', method);
	}

	$App.Routes = $Routes.Routes;

	window.$App = $App
		return (this);
}
	());
