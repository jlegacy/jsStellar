
$App.Model('testing',{
    
    init2:function(data, callback){
            var _this = this;
            console.log(data,'in Model testing');
			
			
            var data = {itworks:"backInView"};
			
			callback(data);
           
        },
     init:function(data) {
            console.log(data,'in Model testing');
        }
   
});