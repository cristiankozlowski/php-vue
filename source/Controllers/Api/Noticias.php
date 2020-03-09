<?php 

namespace Source\Controllers\Api;

use DOMDocument;
use Source\Models\Noticia;
use Source\Controllers\Web\Controller;

class Noticias extends Controller
{
  public function index()
  {
    $news = (new Noticia())->find()->fetch(true);

    foreach($news as $nw) {
      
      $allNews[] = $nw->data();
    }

    echo json_encode($allNews);
  }

  public function create($data) {
    $myNew = (new Noticia());

    $myNew->titulo = $data['titulo'];
    $myNew->conteudo = $data['conteudo'];
    $myNew->imagem = "";

    $myNew->save();
  }

  public function update($data) 
  {
    $news = (new Noticia())->findById($data['id']);

    $news->titulo = $data['titulo'];
    $news->conteudo = $data['conteudo'];

    $news->save();
  }

  public function destroy($data)
  {
    $new = (new Noticia())->findById($data['id']);

    echo $new->destroy();
  }

  public function xmlGenerator()
  {
    $newsWithoutImage = (new Noticia)->find("imagem = :teste", "teste=" . null)->limit(3)->order("id DESC")->fetch(true);
    $newsWithImage = (new Noticia)->find("imagem != :teste", "teste=" . null)->limit(3)->order("id DESC")->fetch(true);
    
    header("content-type: application/xml; charset:ISO-8859-1");

    $xml = new DOMDocument("1.0", "ISO-8859-1");
    $xml->preserveWhiteSpace = false;
    $xml->formatOutput = true;

    $noticias = $xml->createElement("noticias");
    foreach($newsWithImage as $news) { //adiciona os itens com imagem
      $noticia = $xml->createElement("noticia");
      $noticia->setAttribute("titulo", $news->titulo);
      $noticia->setAttribute("texto", $news->conteudo);
      $noticia->setAttribute("imagem", "https://localhost/gerenciador-de-noticias/views/assets/img/" . $news->imagem);
      $noticia->setAttribute("criado", date('d/m/Y H:i:s', strtotime($news->created_at)));

      $noticias->appendChild($noticia);
    }

    foreach($newsWithoutImage as $news) { //adiciona os itens sem imagem
      $noticia = $xml->createElement("noticia");
      $noticia->setAttribute("titulo", $news->titulo);
      $noticia->setAttribute("texto", $news->conteudo);
      $noticia->setAttribute("imagem", "" . $news->imagem);
      $noticia->setAttribute("criado", date('d/m/Y H:i:s', strtotime($news->created_at)));

      $noticias->appendChild($noticia);
    }


    $xml->appendChild($noticias);

    print $xml->saveXML();
  }

  public function jsonGenerator()
  {
    $newsWithoutImage = (new Noticia)->find("imagem = :teste", "teste=" . null, "id, titulo, conteudo, imagem, created_at")->limit(3)->order("id DESC")->fetch(true);
    $newsWithImage = (new Noticia)->find("imagem != :teste", "teste=" . null, "id, titulo, conteudo, imagem, created_at")->limit(3)->order("id DESC")->fetch(true);

    foreach($newsWithImage as $news) { //adiciona os itens com imagem
      
      $news->data()->created_at = date('d/m/Y H:i:s', strtotime($news->data()->created_at));

      $allNews[] = $news->data();
    }
    
    foreach($newsWithoutImage as $news) { //adiciona os itens sem imagem
      
      $news->data()->created_at = date('d/m/Y H:i:s', strtotime($news->data()->created_at));
      $allNews[] = $news->data();
    }


    echo json_encode($allNews);
  }
}