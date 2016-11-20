(function(){
	function init(){
		var preShowTree = document.getElementById("pre-show-tree");
		preShowTree.addEventListener("click",preOrderShow);
		var inShowTree = document.getElementById("in-show-tree");
		inShowTree.addEventListener("click",inOrderShow);
		var postShowTree = document.getElementById("post-show-tree");
		postShowTree.addEventListener("click",postOrderShow);

	}
	var treeArr = [];
	function rander(){
		clearInterval(showQuene);
		var count = 0;
		var showQuene = setInterval(function(){
			if(treeArr[count-1]){
				treeArr[count-1].className = treeArr[count-1].className.replace("show","");
			}
			if(treeArr[count]){
				treeArr[count].className += " show";
			}else if(typeof(treeArr[count])=="undefined"){
				clearInterval(showQuene);
			}
			count++;
		},1000);
		
	}
	function preOrderShow(e){
		e.preventDefault();
		treeArr = [];
		var root = document.getElementById("tree-bi-root");
		preOrderTraverse(root);
		rander();
	}
	function inOrderShow(e){
		e.preventDefault();
		treeArr = [];
		var root = document.getElementById("tree-bi-root");
		inOrderTraverse(root);
		rander();
	}
	function postOrderShow(e){
		e.preventDefault();
		treeArr = [];
		var root = document.getElementById("tree-bi-root");
		postOrderTraverse(root);
		rander();
	}


	// function preOrderTraverse(e){
	// 	e.preventDefault();
	// 	var preNode,currentNode =  document.getElementById("tree-bi-root");
	// 	clearInterval(preOrder);
	// 	var preOrder = setInterval(function(){
	// 		if(currentNode){
	// 			currentNode.className+=" show";
	// 		}
	// 		if(preNode){
	// 			preNode.className = preNode.className.replace("show","");
	// 		}
	// 		if(currentNode.firstElementChild){
	// 			var tranNode = currentNode;
	// 			preNode = currentNode;
	// 			currentNode = tranNode.firstElementChild;
	// 		}else if((currentNode.firstElementChild==null)&&currentNode.nextElementSibling){
	// 			var tranNode = currentNode;
	// 			preNode = currentNode;
	// 			currentNode = tranNode.nextElementSibling;
	// 		}else if((currentNode.firstElementChild==null)&&(currentNode.nextElementSibling==null)){
	// 			var tranNode = currentNode;
	// 			preNode = currentNode;
	// 			if(tranNode.parentElement.nextElementSibling){
	// 				currentNode = tranNode.parentElement.nextElementSibling;
	// 			}else{
	// 				clearInterval(preOrder);
	// 				setTimeout(function(){
	// 					tranNode.className = "treeBi";
	// 				},1000);
	// 			}		
	// 		}
	// 	},1000);
	// }
	function preOrderTraverse(currentNode){
		treeArr.push(currentNode);
		if(currentNode.firstElementChild){
			preOrderTraverse(currentNode.firstElementChild);
		}
		if(currentNode.lastElementChild){
			preOrderTraverse(currentNode.lastElementChild);
		}
	}
	function inOrderTraverse(currentNode){
		if(currentNode.firstElementChild){
			inOrderTraverse(currentNode.firstElementChild);
		}
		treeArr.push(currentNode);
		if(currentNode.lastElementChild){
			inOrderTraverse(currentNode.lastElementChild);
		}
	}
	function postOrderTraverse(currentNode){
		
		if(currentNode.firstElementChild){
			postOrderTraverse(currentNode.firstElementChild);
		}
		if(currentNode.lastElementChild){
			postOrderTraverse(currentNode.lastElementChild);
		}
		treeArr.push(currentNode);
	}

	
	
	init();
})()





























// var srcData = function(){
// 	var numArr = [];
// 	var numArrReal = [];
// 	for(var i = 0;i<10;i++){
// 		numArr[i] = i;
// 	}
// 	for(var j = 0;j<10;j++){
// 		var random = parseInt(Math.random()*numArr.length);
// 		numArrReal[j]=numArr[random];
// 		numArr.splice(random,1);
// 	}
// 	return {
// 		arr:numArrReal
// 	}
// }()
// //srcData.arr原始数据
	
		
// function Node(data,left,right){
// 	this.childLeft = left||null;
// 	this.childRight = right||null;
// 	this.data = data||0;
// }
// // var root = null;
// // var compareNum = function(parentNode,newNode){
	
// // 	if(newNode.data>parentNode.data&&parentNode.childLeft!=null){
// // 		compareNum(parentNode.childLeft,newNode);
// // 	}else if(newNode.data<=parentNode.data&&parentNode.childRight!=null){
// // 		compareNum(parentNode.childRight,newNode);
// // 	}
	
// // 	if(newNode.data>parentNode.data&&parentNode.childLeft==null){
// // 		parentNode.childLeft = newNode;
// // 	}else if(newNode.data<=parentNode.data&&parentNode.childRight==null){
// // 		parentNode.childRight = newNode;
// // 	}
	
// // }
// // var createNewTree = function(){
// // 	for(var i = 0,len = numArrReal.length;i<len;i++){
// // 		var random = numArrReal[i];
// // 		var newNode = new Node(random);
// // 		if(root==null){
// // 			root= newNode;
// // 		}else{
// // 			var myroot = root;
// // 			compareNum(myroot,newNode);
// // 		}
// // 	}
	

// // }
// // var treeBiArr = [];
// // var preOrderTraverse = function(node){
// // 	if(node){
// // 		treeBiArr.push(node.data);
// // 		if(node.childLeft){
// // 			preOrderTraverse(node.childLeft);
// // 		}
// // 		if(node.childRight){
// // 			preOrderTraverse(node.childRight);
// // 		}
		
// // 	}
// // }
// // createNewTree();
// // preOrderTraverse(root);

// function TreeBi(){
// 	this.root = null;
// 	this.treeBiArr = [];
// 	this.compareNum = function(parentNode,newNode){
// 		if(newNode.data>parentNode.data&&parentNode.childLeft!=null){
// 			this.compareNum(parentNode.childLeft,newNode);
// 		}else if(newNode.data<=parentNode.data&&parentNode.childRight!=null){
// 			this.compareNum(parentNode.childRight,newNode);
// 		}else if(newNode.data>parentNode.data&&parentNode.childLeft==null){
// 			parentNode.childLeft = newNode;
// 		}else if(newNode.data<=parentNode.data&&parentNode.childRight==null){
// 			parentNode.childRight = newNode;
// 		}
		
// 	}
// 	this.createNewTree = function(){
// 		for(var i = 0,len = srcData.arr.length;i<len;i++){
// 			var random = srcData.arr[i]
// 			var newNode = new Node(random);
// 			if(this.root==null){
// 				this.root= newNode;
// 			}else{
// 				var myroot = this.root;
// 				this.compareNum(myroot,newNode);
// 			}
// 		}
// 	}
// 	this.preOrderTraverse = function(node){
// 		if(node==null){
// 			node = this.root;
// 		}

// 		this.treeBiArr.push(node.data);
// 		if(node.childLeft){
// 			this.preOrderTraverse(node.childLeft);
// 		}
// 		if(node.childRight){
// 			this.preOrderTraverse(node.childRight);
// 		}
		

		
		
// 	}
	
	
// }

// var myTree = new TreeBi();
// myTree.createNewTree();
// myTree.preOrderTraverse();