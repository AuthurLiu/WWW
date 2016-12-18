<?php
namespace Rbac\Controller;
use Think\Controller;
class IndexController extends Controller {

    public function index(){    
    
    	$this->display();
    }
    public function user(){
        
    }
    public function adduser(){
        
    }
    public function role(){
        $data = M('role')->select();
        $this->data = $data;
        $this->display();
    }
    public function addrole(){
       $this->display();
    }
    public function rolehandle(){   
        if(M("role")->add($_POST)){
            $this->success('提交成功','role');
        }
    }
    public function node(){
        $nodeInitData = M('node')->field('sort,remark',true)->select();
         // dump($nodeInitData);die;
        $nodeInitData = listRemerge($nodeInitData);
        
        $this->nodeInitData = $nodeInitData;
        $this->display();

    }
    public function addnode(){
        if(!IS_AJAX){
         E('页面不存在');
        }
        $name = I('name');
        M('node')->add($_GET);
       
        $where = array(
            "name"=>$name
            );
        $data = M('node')->where($where)->find();
        $this->ajaxReturn($data);
    }
  


}