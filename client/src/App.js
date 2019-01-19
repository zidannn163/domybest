import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
        <div>
            <header className="header">
                <div className="header__title">Крутой заголовок</div>
            </header>
            <div className="content ">
                <div className="menu">
                <div className="menu__block">
                    <div className="menu__title">Отобразить список постов</div>
                    <div className="buttons">
                    <button className="button_stnd button">Начать</button>
                    </div>
                </div>
                <div className="menu__block">
                    <div className="menu__title">Отображать по:</div>
                    <div className="buttons">
                    <button className="button_stnd button">10</button>
                    <button className="button_stnd button">25</button>
                    <button className="button_stnd button">50</button>
                    </div>
                </div>
                <div className="menu__block">
                    <div className="menu__title">Сортировать по:</div>
                    <div className="buttons">
                    <button className="button_stnd button">Дате</button>
                    </div>
                </div>
                <form className="finder menu__block">
                    <lable className="finder__title menu__title">Поиск по слову в названи</lable>
                    <input className="finder__input" />
                    <button className="finder__button button_stnd button">Поиск</button>
                </form>
                <div className="menu__block">
                    <div className="menu__title">Популярные теги:</div>
                    <div className="tags">
                    <a href="#" className="tag">#Путин</a>
                    <a href="#" className="tag">#Украина</a>
                    <a href="#" className="tag">#fuckyourselfchallenge</a>
                    <a href="#" className="tag">#superman</a>
                    <a href="#" className="tag">#guitar</a>
                    <a href="#" className="tag">#Instagramm</a>
                    </div>
                </div>
                <form className="finder menu__block">
                    <lable className="finder__title menu__title">Поиск по тегам</lable>
                    <input className="finder__input" />
                    <button className="finder__button button_stnd button">Поиск</button>
                </form>
                </div>
                <div className="posts">
                <div className="new-post post">
                    <div className="new-post__icon" />
                    <div className="new-post__title">Добавить новый пост</div>
                </div>
                <div className="post">
                    <img src="poster_none.png" alt className="post__img" />
                    <div className="post__title">Никогда такого не было и вот опять</div>
                    <div className="post__prev">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <a href="#" className="post__cliker">Читать полностью</a>
                </div>
                <div className="post">
                    <img src="poster_none.png" alt className="post__img" />
                    <div className="post__title">Никогда такого не было и вот опять</div>
                    <div className="post__prev">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="post__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque odit fugiat veritatis incidunt at, rerum mollitia repellendus deleniti esse temporibus exercitationem enim quam! Nemo laborum aliquid delectus, enim iste autem.
                    Obcaecati ratione voluptatibus officia, ut illum debitis et harum earum ipsum id ipsa perferendis laboriosam pariatur quod, corrupti, voluptatem totam fugit excepturi odio culpa hic tempora inventore quas. Laudantium, sequi.
                    Sint, quaerat! Architecto sint exercitationem ea dolore, ducimus adipisci, nisi animi magni aperiam unde nesciunt qui nemo aliquid hic, tempore suscipit. Dolorem ullam tenetur facere non perspiciatis. Inventore, maiores eaque!</div>
                    <div className="d-CP-border d-CP-border__new-window">
                    <div className="post__new-window"> <a className="post__cliker post__cliker_cloud" href="#">Читать <br /> в новом окне</a> </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="d-blocker">
                <div className="modal modal_size_bg">
                <button className="modal__close button">Закрыть</button>
                <div className="modal__title" />
                <div className="modal__content">
                    <div className="post post_size_bg">
                    <img src="poster_none.png" alt className="post__img post__img_size_bg" />
                    <div className="post__text">
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="d-blocker">
                <div className="modal">
                <button className="modal__close button">Закрыть</button>
                <div className="modal__title">Опубликуйте свой собственный пост!</div>
                <div className="modal__content">
                    <form action className=" form">
                    <lable className="form__lable">Название поста:</lable>
                    <input maxLength={45} type="text" className="form__input" />
                    <lable className="form__lable">Теги:</lable>
                    <input maxLength={45} type="text" className="form__input" />
                    <lable className="form__lable">Ваш текст:</lable>
                    <textarea className="form__textarea" defaultValue={""} />
                    <button className="button button_stnd form__button">Опубликовать</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
