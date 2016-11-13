var numArr = [];
var numArrReal = [];
(function(){
	for(var i = 0;i<10;i++){
		numArr[i] = i;
	}
	for(var j = 0;j<10;j++){
		var random = parseInt(Math.random()*numArr.length);
		numArrReal[j]=numArr[random];
		numArr.splice(random,1);
	}
})()

	
		
function Node(data,left,right){
	this.childLeft = left||null;
	this.childRight = right||null;
	this.data = data||null;
}
var root = null;
var compareNum = function(parentNode,newNode){
	
	if(newNode.data>parentNode.data&&parentNode.childLeft!=null){
		compareNum(parentNode.childLeft,newNode);
	}else if(newNode.data<=parentNode.data&&parentNode.childRight!=null){
		compareNum(parentNode.childRight,newNode);
	}
	
	if(newNode.data>parentNode.data&&parentNode.childLeft==null){
		parentNode.childLeft = newNode;
	}else if(newNode.data<=parentNode.data&&parentNode.childRight==null){
		parentNode.childRight = newNode;
	}
	
}
var createNewTree = function(){
	for(var i = 0,len = numArrReal.length;i<len;i++){
		var random = numArrReal[i];
		var newNode = new Node(random);
		if(root==null){
			root= newNode;
		}else{
			var myroot = root;
			compareNum(myroot,newNode);
		}
	}
	

}
var treeBiArr = [];
var preOrderTraverse=function(node){
	if(node){
		treeBiArr.push(node.data);
		if(node.childLeft){
			preOrderTraverse(node.childLeft);
		}
		if(node.childRight){
			preOrderTraverse(node.childRight);
		}
		
	}
}
createNewTree();
preOrderTraverse(root);

// function Tree(){
// 	this.root = null;
// 	this.compareNum = function(parentNode,newNode){
// 		if(parentNode!=null){
// 			if(newNode.data>parentNode){
// 				compareNum(parentNode.childLeft,newNode);
// 			}else{
// 				compareNum(parentNode.childRight,newNode);
// 			}
// 		}else{
// 			if(newNode.data>parentNode){
// 				parentNode.childLeft = newNode;
// 			}else{
// 				parentNode.childRight = newNode;
// 			}
// 		}
// 	}
// 	this.createNewTree = function(){
// 		for(var i = 0,len = numArrReal.length;i<len;i++){
// 			var random = numArrReal[i];
// 			var newNode = new Node(random);
// 			if(this.root==null){
// 				this.root = newNode;
// 			}else{
// 				compareNum(this.root,newNode);
// 			}
// 		}
		

// 	}
	
// }

// var myTree = new Tree();
// myTree.createNewTree();