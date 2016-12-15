<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>add-role</title>
	<link rel="stylesheet" href="/js/hyc_admin/Public/bootstrap/css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<form method="post" action="<?php echo U('Index/rolehandle');?>">
			<table class="table-striped">
				<tr>
					<td>角色名称：</td>
					<td><input type="text" name = "name" class="form-control"></td>
				</tr>
				<tr>
					<td>角色开启状态：</td>
					<td>
						<label>
							<input type="radio" name="status" value="1">
							开
						</label>
						<label>
							<input type="radio" name="status" value="">
							关
						</label>
					</td>
				</tr>
				<tr>
					<td>角色备注名：</td>
					<td><input type="text" name = "remark" class="form-control"></td>
				</tr>
				<tr>
					<td col="2"><button class="btn btn-default" type="submit">提交</button></td>
				</tr>
			</table>
		</form>
		
	</div>
	
<script src="/js/hyc_admin/Public/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>