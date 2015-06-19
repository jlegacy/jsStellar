$App.Controller('testing2',{

    init2:function(data)
	{
            $App.models.Functions.init2(data, function(data) {
				$App.views.Functions.init2(data); 
			});
        },
     init:function(data) {
            console.log(data,'in Controller testing2');
        }
   
});