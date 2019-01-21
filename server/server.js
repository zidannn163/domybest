const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');


const port = 5000;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'domybesttest'
});


class Database {
    constructor( config ) {
        this.connection = config;
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err ) return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err ) return reject( err );
                resolve();
            } );
        } );
    }
}

const database = new Database(connection);




const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

require('./app/routes')(app, database) 




app.listen(port, () => console.log('Сервер работает')) 