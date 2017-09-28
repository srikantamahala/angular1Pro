myApp.service("myservice", function(){
	this.go = function(){
		setTimeout(function(){
			return "i am going"
		},0)
		
	}
})