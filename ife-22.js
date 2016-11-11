var numArr = [];
var numArrReal = [];
(function(){
	for(var i = 0;i<10;i++){
		numArr[i] = i;
	}
	for(var j = 0,len = numArr.length;j<len;j++){
		var random = parseInt(Math.random()*numArr.length+1);
		numArrReal[j]=numArr[random];
		numArr = numArr.splice(random,1);
	}
})

	
		
function Node(data,left,right){
	this.childLeft = left||null;
	this.childRight = right||null;
	this.data = data||null;
}
	
}
function Tree(){
	this.root = null;
	this.createNewTree = function(){
		for(var i = 0,len = numArrReal.length;i<len;i++){
			var random = numArrReal[i];
			var newNode = new Node(random);
			if(this.root==null){
				this.root = newNode;
			}else{
				compareNum(this.root,newNode);
			}
		}
		

	};
	this.compareNum = function(parentNode,newNode){
		if(parentNode!=null){
			if(newNode.data>parentNode){
				compareNum(parentNode.childLeft,newNode);
			}else{
				compareNum(parentNode.childRight,newNode);
			}
		}else{
			if(newNode.data>parentNode){
				parentNode.childLeft = newNode;
			}else{
				parentNode.childRight = newNode;
			}
		}
}