<?php
namespace Home\Controller;
use Think\Controller;
class LoginController extends Controller {
    public function index(){
    	$this->display();
    }
    public function login(){
    	// if(!IS_POST){
    	// 	E('页面不存在');
    	// }
    	// if(I('code','','md5')!=session('verify')){
    	// 	$this->error('验证码错误');
    	$code = I('code');
    	// }
    	$username = I('username');
    	$password = I('password','','md5');
    	printf($code);
    	printf("\n-------------------");
    	printf(session('verify_code'));
    	die;
    	$user = M('hd_user')->where(array('username'=>$username))->find();
    	var_dump($user);
    	die;
    	if(!$user||$user['password']!=$password){
    		$this->error('账号或密码错误');
    	}
    	if($user['lock']){
    		$this->error('用户被锁定');
    	}
    	$data = array(
    		'id'=>$user['id'],
    		'logintime'=>time(),	
    		'loginip'=> get_client_ip()
    		);

    }
    public function verify(){

        ob_clean(); 
        $verify=new \Think\Verify();
        $verify->length = 4;//可以删除
        $verify->codeSet = '02345689';
        $verify->entry();
    
    }
}