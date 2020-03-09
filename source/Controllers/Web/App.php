<?php 

namespace Source\Controllers\Web;

use Source\Models\Noticia;


class App extends Controller
{
  public function index()
  {
    echo $this->view->render('home');
  }

  public function error($data)
  {
    // var_dump($data);
  }
}