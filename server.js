const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()


let db,
    dbConnectionString = process.env.DB_STRING, //connecting database thru .env
    dbName = 'fullstack-app',
    collection 

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('connected to database')
        db = client.db(dbName)
        collection = db.collection('fullstack-app-obj')
    })


//middleware
app.set('view engine', 'ejs') //use ejs template in view engine folder
app.use(express.static('public')) //simply use files in public folder
app.use(express.urlencoded({extended: true})) //add url
app.use(express.json()) //parse json. read data that's being send back and forth
app.use(cors())

app.get('/', async(request, response) =>{ //homepage
    try{
        response.render('index.ejs')
    }catch(error){
        response.status(500).send({message: error.message})
    }
})



app.listen(process.env.PORT || PORT, () => {
    console.log(`your server is running on port`)
})