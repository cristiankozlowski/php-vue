<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $v($title) ?></title>
  <link href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="<?= url('/views/assets/css/style.css'); ?>">
</head>
<body>
  
  <div id="app">
    <h1 class="titulo_topo">Notícias</h1>
    <?= $v->section('content'); ?>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>  
  <script src="<?= url('/views/assets/js/app.js'); ?>"></script>
</body>
</html>