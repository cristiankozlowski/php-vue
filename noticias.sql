-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 08-Mar-2020 às 21:36
-- Versão do servidor: 10.4.6-MariaDB
-- versão do PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `gerenciador-de-noticias`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `noticias`
--

CREATE TABLE `noticias` (
  `id` int(11) UNSIGNED NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `conteudo` text NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `conteudo`, `imagem`, `updated_at`, `created_at`) VALUES
(4, '13 casos confirmados de novo coronavírus', 'O Ministério da Saúde divulgou nesta sexta-feira (6) o mais recente balanço sobre o novo coronavírus (Sars-Cov-2) no Brasil.Os principais dados do boletim apontam:13 casos confirmados, eram 8 casos no balanço de quinta-feira4 estados têm casos: SP (10), RJ (1), ES (1) e BA (1); há um caso no DF que aguarda contraprova768 casos suspeitos, eram 635 no boletim anterior480 casos foram descartados desde o início do monitoramento', 'https://localhost/gerenciador-de-noticias/views/assets/img/corona.jpg', '2020-03-07 15:31:53', '2020-03-06 20:41:15'),
(5, 'Caso Ronaldinho: ex-jogador e irmão iam ser naturalizados, mas dizem que não sabiam', 'O procurador Federico Delfino afirmou que foi solicitada a naturalização paraguaia de Ronaldinho e do seu irmão Assis no departamento de migrações do país. Os dois asseguram que não deram entrada em qualquer pedido - eles tiveram apreendidos passaportes paraguaios adulterados. O Ministério Público do Paraguai disse que vai investigar um grande esquema que envolve funcionários públicos e pessoas do setor privado. As informações são do jornal paraguaio \"ABC\"', '', '2020-03-06 20:45:00', '2020-03-06 20:45:00'),
(7, 'Salão do Automóvel de São Paulo é adiado para 2021', 'O Salão do Automóvel de São Paulo, que aconteceria em novembro deste ano, foi adiado para 2021 \"para reduzir custos e termos tempo de avaliar novos formatos\", informou a associação das montadoras, a Anfavea, nesta sexta-feira (6)', 'https://localhost/gerenciador-de-noticias/views/assets/img/pib.jpg', '2020-03-06 20:47:50', '2020-03-06 20:47:50'),
(10, 'EuroCopa 2021', 'A EuroCopa 2021 completa 100 anos desde a sua criação e a confederação da Europa, planeja um grande evento', 'https://localhost/gerenciador-de-noticias/views/assets/img/euro-copa.jpg', '2020-03-07 17:48:43', '2020-03-07 15:21:52'),
(11, 'Hotel desaba na China com 70 pessoas em quarentena por coronavírus', 'Um hotel usado abrigar pessoas em quarentena por coronavírus desabou na cidade de Quanzhou, no sudeste da China, informou o governo da cidade neste sábado (7), de acordo com a Agência Reuters.O edifício tinha cerca de 70 pessoas quando desabou, por volta das 19h30 do horário local (6h30 de Brasília)', '', '2020-03-07 15:43:27', '2020-03-07 15:43:27'),
(12, 'Acessório para carregador promete fazer a bateria do celular durar mais', 'Witty é o nome de um acessório com promessa de dobrar a vida útil da bateria de um smartphone ou tablet. O dispositivo funciona como um intermediário entre o carregador e o cabo USB. Ele desliga o aparelho da tomada quando a carga está completa. Interessados têm até o dia 23 de março para garantir o equipamento por 26 euros, cerca de R$ 132 em conversão direta', 'https://localhost/gerenciador-de-noticias/views/assets/img/witty.jpg', '2020-03-07 18:08:23', '2020-03-07 18:08:23'),
(13, 'Avenida Niemeyer é reaberta após ficar nove meses fechada por decisão judicial', 'RIO — O prefeito Marcelo Crivella reabriu oficialmente Avenida Niemeyer ao trânsito de veículos por volta de 6h50 deste sábado. Foram nove meses de interdição judicial depois de vários deslizamentos ao longo da via causados por fortes chuvas que começaram em fevereiro e culminaram em grandes escorregamentos em maio. Segundo o prefeito, o atraso na reabertura, marcada para as 6h deste sábado, se deu por conta de 64 veículos que estavam estacionados na avenida e precisaram ser rebocados. No entanto, como informa Crivella, 62 proprietários apareceram para resgatar seus carros e somente dois permaneceram atrapalhando o trãnsito, motivo do atraso da reabertura', '', '2020-03-07 18:12:00', '2020-03-07 18:12:00'),
(17, 'Lucas Chumbo dá show e vence desafio Gigantes de Nazaré 2020 ao lado de Ian Cosenza', 'Não teve para ninguém na segunda edição do \"Gigantes de Nazaré\", evento de tow-in exibido pelo Esporte Espetacular, na manhã deste domingo. Em um mar com ondas enormes e perfeitas, Lucas Chumbo e Ian Cossenza desbancaram 5 duplas para se sagrarem campeões das duas disputas que estavam em jogo no desafio do Verão Espetacular: melhor performance geral e maior onda', '', '2020-03-08 21:35:41', '2020-03-08 21:35:41');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
