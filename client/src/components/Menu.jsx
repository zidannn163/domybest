import React from 'react';
import PropTypes from 'prop-types';

import MenuBlock from './MenuBlock';
import Button from './Button'
import Finder from './Finder';
import Tag from './Tag';


const propTypes = {
    popTags: PropTypes.array,
    func: PropTypes.shape({
        download: PropTypes.func.isRequired,
        findPostByTag: PropTypes.func.isRequired,
        findFunc: PropTypes.func.isRequired,
        findPostByTagName: PropTypes.func.isRequired,
    }).isRequired,
    
};
const defaultProps = {
    popTags: []
}


const Menu = (props) => {


    return (
        <div className="menu">
            <MenuBlock title={'Отобразить список постов'}>
                <div className="buttons">
                    <Button buttonName={'Поиск'} 
                            buttonClass={'button_stnd button'}  
                            func={ props.func.download }/>
                </div>
            </MenuBlock>



            <Finder findFunc={props.func.findFunc} finderLabel={'Поиск по слову в названии'} />

            <MenuBlock title={'Список тегов'}>
                <div className="tags">
                    {props.popTags.map((tag) => <Tag key={tag.id} id={tag.id} tag={tag.tag} func={props.func.findPostByTag} />)}
                </div>
            </MenuBlock>

            <Finder findFunc={props.func.findPostByTagName} finderLabel={'Поиск по тегам'} />


        </div>
    );
};


Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;


export default Menu;


