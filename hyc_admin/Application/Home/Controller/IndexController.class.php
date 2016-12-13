<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
	public function _initialize(){
		if(isset($_SESSION['uid'])||isset($_SESSION['username'])){
			redirect('Login/login');
			
		}
	}
    public function index(){
    	
    	if(session('username')){
    		$this->username = session('username');
    	}
    	
    	$this->display();
    }
}