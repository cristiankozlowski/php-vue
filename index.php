<?php 

require "vendor/autoload.php";

use CoffeeCode\Router\Router;

$router = new Router(BASE_URL['root']);

/** Web */
$router->namespace("\Source\Controllers\Web");
$router->group(null);
$router->get("/", "App:index", "app.index");


/** Api */
$router->namespace("\Source\Controllers\Api");
$router->group("/api");
$router->get("/", "Noticias:index", "noticias.index");
$router->post("/create/{titulo}/{conteudo}", "Noticias:create", "noticias.create");
$router->put("/update/{id}/{titulo}/{conteudo}", "Noticias:update", "noticias.update");
$router->delete("/{id}", "Noticias:destroy", "noticias.destroy");

/* XML */
$router->get('/xml-generator', "Noticias:xmlGenerator", "noticias.xmlGenerator");
$router->get('/json-generator', "Noticias:jsonGenerator", "noticias.jsonGenerator");

/**
 * This method executes the routes
 */
$router->dispatch();

/*
 * Redirect all errors
 */
if ($router->error()) {
  $router->redirect("/error/{$router->error()}");
}