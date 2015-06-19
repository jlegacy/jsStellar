$App.Model('testing2',{
    
    init2:function(data, testcall) {
            console.log(data,'in Model testing2');
            var data = {itworks:"backInView2"};
			testcall(data); 
        },
     init:function(data) {
            console.log(data,'in Model testing2');
        }
   
});
