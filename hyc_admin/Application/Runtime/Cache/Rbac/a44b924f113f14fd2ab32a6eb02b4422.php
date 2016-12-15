<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>node</title>
	<link rel="stylesheet" href="/js/hyc_admin/Public/bootstrap/css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<table class="table table-striped table-bordered table-hover" id = "main-data">
			<tr>
				<td>id</td>
				<td>名称</td>
				<td>中文名称</td>
				<td>开启状态</td>
				<td>父级id</td>
				<td>等级</td>
			</tr>
			
		</table>
		<button id="open-modal">添加节点</button>
	</div>
	<div class="modal fade" id="my-modal" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				
				<div class="modal-header">
					<h4>添加节点</h4>
				</div>
				<div class="modal-body">
					<form id="add-node" action="<?php echo U('Index/addnode');?>" class="form-horizontal">
						<div class="form-group">
							<label for="name" class="col-sm-2 control-label">名称:</label>
							<div class="col-sm-10">
								<input type="text" name="name" id="name" class="form-control">
							</div>
						</div>
						<div class="form-group">
							<label for="name" class="col-sm-2 control-label">中文名称:</label>
							<div class="col-sm-10">
								<input type="text" name="name" id="title" class="form-control">
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
			btnUpForm.on('click',function(e){
				e.preventDefault();
				$('#add-node').submit();
			});
			var myModal = $("#my-modal");
			myModal.modal({
				show:false
			});
		}
		function funOpenModal(event){
			event.preventDefault();
			$("#my-modal").modal('show');
		}
		function funUpForm(event){
			event.preventDefault();
			var sendData = $('#add-node').serialize();
			$.get(url,sendData,function(data){
				var newData = $.parseJSON(data);
				alert(newData.name);


			});
			$("#my-modal").modal('hide');
		}
		init();
	})()
</script>
</body>
</html>