import React from 'react';
import PropTypes from 'prop-types';

import MenuBlock from './MenuBlock';
import Finder from './Finder';
const propTypes = {
    
};


const Menu = () => {
    return (
        <div className="menu">
            <MenuBlock buttons={[{}]} menuTitle={"Отобразить список постов"}/>
            <MenuBlock buttons={[{}]} menuTitle={"Отображать по:"}/>
            <MenuBlock buttons={[{}]} menuTitle={"Сортировать по:"}/>

            <Finder findFunc={null} finderLabel={'Поиск по слову в названи'} />
            <MenuBlock buttons={[{}]} menuTitle={"Отобразить список постов"}/>
            <Finder findFunc={null} finderLabel={'Поиск по тегам'} />

            {/* <div className="menu__block">
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
            <form className="finder ">
                <lable className="finder__title">Поиск по слову в названи</lable>
                <input />
                <div className="buttons">
                    <button className="button_stnd button">Поиск</button>
                </div>
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
            <form className="finder ">
                <lable className="finder__title">Поиск по тегам</lable>
                <input />
                <button className="finder__button button_stnd button">Поиск</button>
            </form> */}
        </div>
    );
};


Menu.propTypes = propTypes;


export default Menu;
