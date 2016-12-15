<?php 
function mysqlIdTruncate($tableName){
	$query = 'TRUNCATE TABLE'.$tableName;
	M($tableName)->query($query);
}

 ?>