(function () {

	$("body").on("click", "a", function (e) {
		data = {};
		e.preventDefault();
		console.log(e);
		data = ($(this).data('data'));
		
			x = _.findWhere($App.Routes.links, {
					href : $(this).attr('href')
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
