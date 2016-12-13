<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
	// public function _initialize(){
 //        if(!isset($_SESSION['uid'])||!isset($_SESSION['username'])){
           
 //            $this->redirect('Login/index');
            
 //        }
	// }
    public function index(){    
    	// $this->username = session('username');
    	
    	$this->display();
    }
    public function logout(){
        // session_unset();
        // session_destroy();
        // $this->redirect('Login/index');
    }
}