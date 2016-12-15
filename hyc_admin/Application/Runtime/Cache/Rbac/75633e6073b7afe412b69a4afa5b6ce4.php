<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>role</title>
	<link rel="stylesheet" href="/js/hyc_admin/Public/bootstrap/css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<table class="table">
			<tr>
				<td>id</td>
				<td>角色名称</td>
				<td>pid</td>
				<td>角色开启状态</td>
				<td>角色备注</td>
			</tr>
			<?php if(is_array($data)): foreach($data as $key=>$row): ?><tr>
					<?php if(is_array($row)): foreach($row as $key=>$col): ?><td><?php echo ($col); ?></td><?php endforeach; endif; ?>
				</tr><?php endforeach; endif; ?>
		</table>
	</div>
	
<script src="/js/hyc_admin/Public/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>