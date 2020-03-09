<?php 

namespace Source\Controllers\Web;

use League\Plates\Engine;

class Controller 
{
  protected $router;
  protected $view;

  public function __construct($router)
  {
    $this->router = $router;
    $this->view = Engine::create(dirname(__DIR__, 3) . '/views', 'php');
  }
}