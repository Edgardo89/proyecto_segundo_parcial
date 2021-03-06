import mysql from 'mysql2'

const cnn = mysql.createConnection({
    host     : process.env.DB_Host,
    user     : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
})

cnn.connect(err => {
    if(err){
        console.log(`${err}`);
        return
    }

    console.log(`conectados a la base de datos ${process.env.DB_DATABASE}`);
})

export default cnn