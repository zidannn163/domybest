# domybest

MYSQL, Create React App, Express

# Тестовое задание
Реализовать сервис «Блог»

- Написать простейшее REST API
 - GET /posts - возвращает список всех постов [Название, Дата,  Краткий текст]
 - GET /posts/:id - возвращает подробную информаци о посте [Название, Дата,  Краткий текст, Полный текст, …]
 - POST /posts - создает новый пост

- Реализовать приложение на React
 - Список постов
 - Просмотр поста
 - Поиск постов


Внешний вид и выбор инструментов остается на твое усмотрение, если возникли вопросы - пиши/ звони 8 (926) 618 81 01 Дмитрий

# Коментарий:

Сам захотел немного усложнить  функционал, так как нуждаюсь в опыте.
Не все понравилось в итоге самому, но теперь знаю, как лучше не делать.

Дополнительно добавил возможность искать публикации по тегам. База данных сейчас почти пустая, но и по паре записей уже все видно. Внешний вид конечно хромает, но я 
далеко не дизайнер, по шаблону бы сверстал получше. 

При расскрытии поста через 2 секунды выпадает баббл, кликабельный, раскрывает статью для чтения. Теги добавляются не только через пробел, но и через запятые и прочие символы. 

В БД три таблицы - посты, теги, и таблица с их связями.