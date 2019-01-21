



module.exports = (app, db) => {

  

    console.log(db)
    
    app.get("/download", (req, res) => {    // Загрузить данные сервера
        console.log("Запросик")
        const query1 = `SELECT *
                        FROM posts`;
        const query2 = `SELECT *
                        FROM tags`;
        const query3 = `SELECT id_tag, id_post
                        FROM post_to_tag`;
        
        let posts, tags, post_to_tag;

        db.query(query1)
            .then(result => {
                posts = result;
                return db.query(query2);
            })
            .then(result => {
                tags = result;
                return db.query(query3);
            })
            .then(result => {
                post_to_tag = result;
                console.log({posts, tags, post_to_tag})
                return  res.send({posts, tags, post_to_tag});
            })
            .catch(error => {
                console.log(error)
                res.send({error: error.message})
            });
    })



    app.post("/new-post", (req, res) => {                     // Новый пост и теги, запись и возврат значения

        const tagsArr = req.body.tags.split(/[ .:;?!~,#'"&|()<>{}\[\]\r\n/\\]+/);

        let tagsValues_forINSERT =  tagsArr.map(tag => `('${tag}'),`);
        let tagsValues_forSELECT =  tagsArr.map(tag => `tags.tag='${tag}' OR `)

        tagsValues_forINSERT = tagsValues_forINSERT.join('');
        tagsValues_forINSERT = tagsValues_forINSERT.substring(0, tagsValues_forINSERT.length - 1);

        tagsValues_forSELECT = tagsValues_forSELECT.join('');
        tagsValues_forSELECT = tagsValues_forSELECT.substring(0, tagsValues_forSELECT.length - 4);
        console.log("tagsValues_forINSERT", tagsValues_forINSERT)

        const query1 = `INSERT INTO posts (date, title, text)
                        VALUES (NOW(), '${req.body.title}', '${req.body.text}' )`;

        

        const query2 = `INSERT IGNORE INTO tags (tag)
                        VALUES ${tagsValues_forINSERT}`;


        const query3 = `INSERT INTO post_to_tag (id_post,id_tag)
                        SELECT posts.id, tags.id
                        FROM posts, tags
                        WHERE posts.title='${req.body.title}' and (${tagsValues_forSELECT})`;
//WHERE posts.title='123' and (tags.tag='скандалы' OR tags.tag='интриги' )
        const query4 = `SELECT *
                        FROM posts`;
        const query5 = `SELECT *
                        FROM tags`;
        const query6 = `SELECT id_tag, id_post
                        FROM post_to_tag`;

        
        

        let posts, tags, post_to_tag;

        db.query(query1)
            .then(() => db.query(query2))
            .then(() => db.query(query3))
            .then(() => db.query(query4))
            .then(result => {
                posts = result;
                return db.query(query5);
            })
            .then(result => {
                tags = result;
                return db.query(query6);
            })
            .then(result => {
                post_to_tag = result;
                console.log(posts, tags, post_to_tag)
                return  res.send({posts, tags, post_to_tag});
            })
            .catch(error => {
                console.log(error)
                res.send({error: error.message})
            });


    })

}