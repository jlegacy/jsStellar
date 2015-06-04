(function () {

	$("body").on("click", "a", function (e) {
		e.preventDefault();

		//console.log(e.currentTarget.href)
		//console.log(e.toElement.baseURI);

		var id = '#' + $(e.target).attr('id');
		console.log($('#helpLink').data('data'));

		/*	var splitBase,
		splitURL,
		splitParms,
		action,
		numberParms;

		splitBase = (e.toElement.baseURI).split("/");

		splitURL = (e.currentTarget.href).split("/");

		action = splitURL[splitBase.length];

		splitParms = (e.currentTarget.href).split(":");

		console.log(action);
		console.log(splitParms);

		return false; */
	});

	var $App = function () {};
	var $AppViewFuncs = [];
	var $AppControllerFuncs = [];
	var $AppModelFuncs = [];

	$App.LoadTemplate = function (path) {
		var template = {};
		$.ajax({
			url : path,
			async : false,
			dataType: "text",
			success : function (data) {
				 template =  Handlebars.compile(data);
			},
			error : function (data) {
				 console.log(data);
			}
		});
		
		return template;
		}

		$App.SetLink = function (el, data) {

			$('#helpLink').data('data', data);
			console.log($('#helpLink').data('data'));

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
			console.log(formData);

			var requireJSName;
			var models;
			var views;
			var controllers;
			var funcName,
			x,
			y,
			controllerName;

			x = _.findWhere($App.Routes.forms, {
					action : action
				});

			y = _.findWhere($AppControllerFuncs, {
					name : x.controller
				});

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

			var def = {
				Name : x.controller
			}
			var funcToCall = _.find($AppControllerFuncs, function (item, key) {
					return _.has(item, _.keys(def)[0])
				})

				var fireIt = funcToCall.Functions[x.method];

			fireIt(formData, models, views);

		}

		$App.Fire = function (method, data) {
			var requireJSName;
			var models;
			var views;
			var controllers;
			var funcName,
			x,
			controllerName;

			x = _.findWhere($App.Routes.events, {
					event : method
				});

			y = _.findWhere($AppControllerFuncs, {
					name : x.controller
				});

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

			var def = {
				Name : x.controller
			}
			var funcToCall = _.find($AppControllerFuncs, function (item, key) {
					return _.has(item, _.keys(def)[0])
				})

				var fireIt = funcToCall.Functions[x.method];
			fireIt(data, models, views);

		}

		$App.Routes = $Routes.Routes;

		window.$App = $App
			return (this);
	}
		());
