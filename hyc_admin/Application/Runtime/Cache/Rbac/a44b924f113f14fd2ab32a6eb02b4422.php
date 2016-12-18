<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>node</title>
	<link rel="stylesheet" href="/js/hyc_admin/Public/bootstrap/css/bootstrap.min.css">
</head>
<body>
	<div class="container" id="container">
	<button id="open-modal" class= 'btn btn-large btn-primary'>添加模块</button>
		<!-- <table class="table table-striped table-bordered table-hover" id="main-data">
			<tr>
				<td>id</td>
				<td>名称</td>
				<td>中文名称</td>
				<td>开启状态</td>
				<td>父级id</td>
				<td>等级</td>
			</tr>

		</table> -->
		<?php if(is_array($nodeInitData)): foreach($nodeInitData as $key=>$fstPid): ?><div class="panel-group">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a href="#collapse<?php echo ($key); ?>" data-toggle="collapse" ><?php echo ($fstPid["name"]); ?></a>
							<button class="btn add-node" data-pid="<?php echo ($fstPid["id"]); ?>" data-level="<?php echo ($fstPid["level"]); ?>" style="float:right;margin-top:-5px;">
								<span class="glyphicon glyphicon-plus"></span>
							</button>
						
						</h4>
					</div>
					<div class="panel-collapse collapse in" id="collapse<?php echo ($key); ?>">
						<ul class="list-group" id="list<?php echo ($fstPid["id"]); ?>">
							<?php if(is_array($fstPid["child"])): foreach($fstPid["child"] as $key=>$SecPid): ?><li class="list-group-item"><?php echo ($SecPid["name"]); ?></li>
								<?php if(is_array($SecPid["child"])): foreach($SecPid["child"] as $key=>$thdPid): ?><li class="list-group-item list-group-item-info">
										<?php echo ($thdPid["name"]); ?>
									</li><?php endforeach; endif; endforeach; endif; ?>
						</ul>
					</div>
				</div>
			</div>	
			<!-- <?php if(is_array($row)): foreach($row as $key=>$col): ?><td><?php echo ($col); ?></td><?php endforeach; endif; ?> --><?php endforeach; endif; ?>
		
	</div>
	
	<div class="modal fade" id="my-modal" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				
				<div class="modal-header">
					<h4>添加节点</h4>
				</div>
				<div class="modal-body">
					<form id="add-node" action="<?php echo U('Index/addnode');?>" class="form-horizontal">
						<div class="form-group" >
							<label for="name" class="col-sm-2 control-label">名称:</label>
							<div class="col-sm-10">
								<input type="text" name="name" id="name" class="form-control">
							</div>
						</div>
						<div class="form-group">
							<label for="name" class="col-sm-2 control-label">中文名称:</label>
							<div class="col-sm-10">
								<input type="text" name="title" id="title" class="form-control">
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">
								<div class="checkbox">
									<label>
										<input type="checkbox" name="status" value="1" >开启
									</label>
								</div>
							</div>
						</div>
						<input type="hidden" name="pid">
						<input type="hidden" name="level">
						
					</form>
				</div>
				<div class="modal-footer">
					<button class="btn btn-default" id="btn-up-form" type="submit">添加</button>
					<button class="btn btn-default" data-dismiss="modal">取消</button>
				</div>
				
			</div>
		</div>
	</div>


	
	<div class="panel-group" id="insert-tpl-1" >
	  	<div class="panel panel-default">

		    <div class="panel-heading">
		      <h4 class="panel-title">
		        <a data-toggle="collapse" href="#list-@[id]">@[name]</a>
		        <button class="btn add-node" data-pid="@[id]" data-level="@[level]" style="float:right;margin-top:-5px;">
		        	<span class="glyphicon glyphicon-plus"></span>
		        </button>
		      </h4>
		    </div>

		    <div id="list-@[id]" class="panel-collapse collapse in">
		      <ul class="list-group"></ul>
		    </div>

	  	</div>
	</div>

	<li id="insert-tpl-2">@[name]</li>











<script>
	var url= "<?php echo U('Index/addNode');?>";
</script>
<script src="/js/hyc_admin/Public/js/jquery.min.js"></script>
<script src="/js/hyc_admin/Public/bootstrap/js/bootstrap.min.js"></script>
<script>
	(function(){
		function init(){
			var openModal = $('#open-modal');
			openModal.on('click',funOpenModal);
			var btnUpForm = $('#btn-up-form');
			btnUpForm.on('click',funUpForm);
			var myModal = $("#my-modal");
			myModal.modal({
				show:false
			});
			var btnList = $(".add-node");
			$.each(btnList,function(){
				this.addEventListener("click",funOpenModal);
			});
		}
		function initInsertTpl(data,insertId){
			var initDOM = $('#'+insertId);
			var innerHTML = initDOM.html();
			innerHTML = innerHTML.replace(/@\[([^\[\]\@]*)\]/g,function(matchStr){
				var key = matchStr.match(/@\[([^\[\]\@]*)\]/);
				return data[key[1]];
			});
			return innerHTML;
		}
		function funOpenModal(event){
			event.preventDefault();
			$("#my-modal").modal('show');
			var form = document.getElementById('add-node');
			form.elements['pid'].value = event.target.dataset['pid'];
			form.elements['level'].value = event.target.dataset['level']+1;

		}
		function funUpForm(event){
			event.preventDefault();
			var sendData = $('#add-node').serialize();
			$.get(url,sendData,function(data){
				var newData = data;
				var innerHTML='';
				if(newData.pid==0){
					innerHTML = initInsertTpl(data,"insert-tpl-1");

					// innerHTML+="<div class='panel-group'><div class='panel panel-default'><div class='panel-heading'><h4 class='panel-title'><a href='#collapse"+newData.id+"' data-toggle='collapse' >"+newData.name+"</a><button class='btn btn-primary add-node' data-pid='"+newData.pid+"' data-level='"+newData.level+"'><span class='glyphicon glyphicon-plus'></span></button></h4></div><div class='panel-collapse collapse' id='collapse"+newData.id+"'><ul class='list-group' id='list"+newData.id+"'></ul></div></div></div>";
					$(innerHTML).appendTo('#container');

				}else{
					innerHTML = "<li class='list-group-item'>";
					innerHTML += data.name;
					innerHTML += "</li>";
					var listId = "#list"+data.pid;
					$(innerHTML).appendTo(listId);
				}
				
				$("#collapse"+data.pid).addClass('in');

			});
			$("#my-modal").modal('hide');
		}
		init();
	})()
</script>
</body>
</html>