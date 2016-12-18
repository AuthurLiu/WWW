<?php 
function mysqlIdTruncate($tableName){
	$query = 'TRUNCATE TABLE'.$tableName;
	M($tableName)->query($query);
}
function listRemerge($nodeList,$pid="0"){
	$arr = array();
	foreach($nodeList as $node){
		if($node['pid']==$pid){
			$node['child'] = listRemerge($nodeList,$node['id']);
			
			$arr[] = $node;
		}
		
	}
	return $arr;
}
 ?>