import React, { Component } from 'react';

import Menu from './components/Menu';
import Posts from './components/Posts';


class App extends Component {

    


  render() {
    return (
        <div>
            <header className="header">
                <div className="header__title">Крутой заголовок</div>
            </header>
            <div className="content ">
               
                <Menu/>
                <Posts posts={[{}]} func={null}/>
                
            </div>
            {/* <div className="d-blocker">
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
                        <form action className="form">
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
            </div> */}
        </div>
    );
  }
}

export default App;
