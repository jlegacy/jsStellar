
$App.Model('testing2',{
    
    init2:function(data, models, views) {
            var _this = this;
            console.log(data,'in Model testing2');
			
			
            var data = {itworks:"backInView2"};
			
			var func = views.Functions.init;
			func(data, models, views);
           
        },
     init:function(data) {
            console.log(data,'in Model testing2');
        }
   
});
