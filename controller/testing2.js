$App.Controller('testing2',{

    init2:function(data, models, views)
	{
            models.Functions.init2(data, function(data) {
				views.Functions.init2(data); 
			});
        },
     init:function(data) {
            console.log(data,'in Controller testing2');
        }
   
});