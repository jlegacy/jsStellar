$App.Controller('testing2',{

    init2:function(data, models, views) {
             var _this = this;
            console.log(data,'in Controller testing2');
            var func = models.Functions.init2;
			func(data, models, views);
            
        },
     init:function(data) {
            console.log(data,'in Controller testing2');
        }
   
});