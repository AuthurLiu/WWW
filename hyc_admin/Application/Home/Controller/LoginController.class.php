<?php
namespace Home\Controller;
use Think\Controller;
class LoginController extends Controller {
    public function index(){
        $this->display();
    }
    public function login(){
        if(!IS_POST){
            E('页面不存在');
        }
        $code = I('code');
        $verify = new \Think\Verify();
        $result = $verify->check($code);
        if(!$result){
            $this->error('验证码错误');
           
        }
        $username = I('username');
        $password = I('password','','md5');
        
       
        $user = M('user')->where(array('username'=>$username))->find();
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
         M('user')->save($data);
        session('username',$username);
        session('uid',$user['id']);
        session('logintime',date('y-m-d H:i:s',$user['logintime']));
        session('loginip',$user['loginip']);

        $this->redirect('Index/index');

    }
    public function verify(){

        ob_clean(); 
        $verify=new \Think\Verify();
        $verify->length = 4;//可以删除
        $verify->codeSet = '02345689';
        $verify->entry();
    
    }
}