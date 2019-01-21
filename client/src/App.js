import React, { Component } from 'react';

import Menu from './components/Menu';
import Posts from './components/Posts';
import BigPost from './components/BigPost';

import Modal from './components/modals/Modal';
import NewPostForm from './components/modals/NewPostForm';




class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            posts: [],          // Список постов
            tags: [],           // Список тегов
            post_to_tag: [],    // Список ссылок постов на теги
            popTags: [],         // популярные (случайные) теги


            newPost: false,
            error: null,
            postVisible: [],

            bigSizePost:{
                title: '', 
                text:  '',
                id:  null, 
                date:  ''
            },
            bigSize: false
        }
    }


    post = (path , bodyStr, done) => {  // общая функция POST-запроса
        
        const post = {
            method: 'post',  
            headers: {  
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
            },  
            body: bodyStr
        }
        fetch(`http://localhost:3000/${path}`, post) 
            .then(res => res.json())
            .then(params =>  done(params))
            .catch(err => console.log('ERROR', err.message))        
    }

    get = (path, done) => {              // Общая функция GET-запроса
        fetch(`http://localhost:3000/${path}`) 
            .then(res =>  res.json())
            .then(params => done(params))
            .catch(err => console.log( 'ERROR!', err.message)) 
    }

    updateStatePosts = (response) => {   // Обработчик ответа сервера на запрос данных
        
        const popTags = response.tags.slice(0, 10);
        const postVisible = response.posts.slice(0, 10);

        this.setState({
            posts: response.posts,
            tags: response.tags,
            post_to_tag: response.post_to_tag,

            postVisible: postVisible,
            popTags: popTags,
        })
    }

    findFunc = (findeStr) => {              // Обработчик поиска
        if (findeStr === "") {
            this.setState({
                postVisible: this.state.posts
            }) 
            return 
        }

        let posts = this.state.posts.filter(elem => {
            return elem.text.indexOf(findeStr) !== -1 ? true : false
        })

        this.setState({
            postVisible: posts
        }) 
    }

    findPostByTag = (id_tag) => {           // поиск по id тега
        console.log(id_tag)
        const id_posts = this.state.post_to_tag.filter((row) => row.id_tag === id_tag ) ;
        let postVisible = [];
        id_posts.forEach((item) => {
            this.state.posts.forEach(row => {
               if ( row.id === item.id_post ) {
                    postVisible.push(row)
               }
            })
        })
        this.setState({
            postVisible
        }) 
    }

    findPostByTagName = (tagStr) => {
        console.log(tagStr)
        const tag = this.state.tags.filter(elem =>{
            console.log(elem)
            return elem.tag  === tagStr ? true : false
        })
        console.log(tag)

        if (tag[0] === undefined) {
            this.setState({
                postVisible: this.state.posts
            }) 
            return 
        } else {

            this.findPostByTag(tag[0].id)
        }

        
    }
    


    bubbleFunc = (title, text, date) => {
        this.setState({
            bigSizePost: { title, text, date },
            bigSize: true
        })
    }
    
    

    downloadData = () => {                  // функция вызывающая загрузку постов
        const path = "download";
        this.get(path, this.updateStatePosts);
    }

    newPostToggler = () => {                 // Выключатель для модального окна создания нового поста
        this.setState({
            newPost: !this.state.newPost
        })
    }

    bigSizeToggler = () => {
        this.setState({
            bigSize: !this.state.bigSize
        })
    }
   
    newPostHandler = (obj) => {             // Функция отправки данных формы на сервер мутдом POST
        
        const bodyStr = `title=${obj.title}&text=${obj.text}&tags=${obj.tags}`;
        const path = 'new-post';

        this.post(path, bodyStr, this.updateStatePosts);
        this.newPostToggler()
    }

    
    
    

    render() {
        return (
            <div>
                <header className="header">
                    <div className="header__title">Крутой заголовок</div>
                </header>
                <div className={`content ${this.state.newPost || this.state.bigSize ? "d-blur" : ''}`}>  
                    <Menu  func={{download: this.downloadData,
                                  findPostByTag: this.findPostByTag,
                                  findPostByTagName: this.findPostByTagName,
                                  findFunc: this.findFunc}}
                           popTags={this.state.popTags}/>

                    <Posts posts={this.state.postVisible} 
                           func={this.newPostToggler}
                           bubbleFunc={this.bubbleFunc}/>    
                </div>
                
                {this.state.newPost &&      
                    <Modal close={this.newPostToggler} title="Создайте свой собственный пост!">
                        <NewPostForm formHandler={this.newPostHandler}/>
                    </Modal>
                }
                {this.state.bigSize &&      
                    <Modal close={this.bigSizeToggler}  mod="modal_size_bg" title={this.state.bigSizePost.title}>
                        <BigPost text={this.state.bigSizePost.text} 
                                 date={this.state.bigSizePost.date}/>
                    </Modal>
                }
                
            </div>
    );
  }
}

export default App;
