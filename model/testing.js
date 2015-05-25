
$App.Model('testing',{
    
    init2:function(data, models, views) {
            var _this = this;
            console.log(data,'in Model testing');
			
			
            var data = {itworks:"backInView"};
			
			var func = views.Functions.init;
			func(data, models, views);
           
        },
     init:function(data) {
            console.log(data,'in Model testing');
        }
   
});