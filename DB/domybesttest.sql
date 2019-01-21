-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Янв 21 2019 г., 09:40
-- Версия сервера: 10.1.34-MariaDB
-- Версия PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `domybesttest`
--

-- --------------------------------------------------------

--
-- Структура таблицы `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `title` varchar(40) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `posts`
--

INSERT INTO `posts` (`id`, `date`, `title`, `text`) VALUES
(1, '2019-01-21', 'Какая погода ждет Москву?', 'МОСКВА, 21 янв - РИА Новости. Постепенное усиление морозов прогнозируется в Москве в понедельник, температура воздуха днём понизится до 9 градусов ниже ноля, подует порывистый ветер, сообщили в центре погоды \"Фобос\".\nРанее синоптики отмечали, что аномальные 25-градусные морозы придут в столичный регион во вторник и среду.\nУже в ночь на понедельник в столичный регион стал прорываться холодный атмосферный фронт с интенсивными зарядами снега и порывистым ветром. Днем в Москве облачно с неустойчивыми прояснениями, ожидаются кратковременный снег, слабая метель\", - сообщили в центре погоды.\nПо данным синоптиков, температура воздуха в городе понизится до минус 7-9 градусов, в Подмосковье - до 7-12 градусов ниже ноля.\nВетер ожидается западный, северо-западный со скоростью 4-9 метров в секунду, порывистый. Атмосферное давление будет слабо расти и составит 744 миллиметра ртутного столба.'),
(2, '2019-01-21', 'Одобрили ВСМ между Москвой и Новгородом', 'Строительство первого участка высокоскоростной магистрали (ВСМ) Москва-Казань — от Железнодорожного Московской области до Гороховца в Нижегородской одобрено на совещании у вице-премьера Максима Акимова 17 января, пишет газета \"Коммерсант\" со ссылкой на источник.\nВ аппарате Акимова изданию подтвердили факт совещания, не уточнив детали.\nо словам собеседника газеты, знакомого с ситуацией, было предложено констатировать, что проект обеспечивает выход на плановую операционную безубыточность как владельца инфраструктуры (концессионера), так и перевозчика (РЖД) с третьего года эксплуатации даже при консервативной оценке пассажиропотока. Также предложено предусмотреть выделение бюджетных средств, заложенных в комплексный план модернизации инфраструктуры, и актуализировать законопроект, устанавливающий нулевую ставку налога на имущество в отношении объектов ВСМ.\nУчасток Железнодорожный-Гороховец с организацией движения до Нижнего Новгорода должен стать первым этапом ВСМ Москва-Казань. Первый участок сократит время в пути от Москвы до Нижнего Новгорода до 2 часов 5 минут. Стоимость проекта оценивается в 621,55 миллиарда рублей, из которых бюджет должен предоставить капитальный грант 200 миллиардов рублей, РЖД — тоже 200 миллиардов, остальная сумма - средства концессионера.');

-- --------------------------------------------------------

--
-- Структура таблицы `post_to_tag`
--

CREATE TABLE `post_to_tag` (
  `id` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `id_tag` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `post_to_tag`
--

INSERT INTO `post_to_tag` (`id`, `id_post`, `id_tag`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 5),
(5, 2, 2),
(6, 2, 4),
(7, 2, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `tag` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tags`
--

INSERT INTO `tags` (`id`, `tag`) VALUES
(5, 'ЖД'),
(2, 'Москва'),
(4, 'Новгород'),
(1, 'погода'),
(3, 'столица');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `post_to_tag`
--
ALTER TABLE `post_to_tag`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tag` (`tag`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `post_to_tag`
--
ALTER TABLE `post_to_tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
