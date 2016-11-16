(function(){
	var showQuene = [];
	function init(){
		var depthFirst = document.getElementById("depth-first");
		var breadthFirst = document.getElementById("breadth-first");
		depthFirsh.addEventListener
	}

	function rander(){
		clearInterval(show);
		var count = 0;
		var show = setInterval(function(){
			if(showQuene[count-1]){
				showQuene[count-1].className = showQuene[count-1].className.replace("show","");
			}
			if(showQuene[count]){
				showQuene[count].className += " show";
			}else if(typeof(showQuene[count])==undefined){
				clearInterval(show);
			}
			count++
		},500);
	}
})()