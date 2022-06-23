const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()


app.use(cors())




let db,
    dbConnectionString = process.env.DB_STRING, //
    dbName = 'fullstack-app',
    collection 

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('connected to database')
        db = client.db(dbName)
        collection = db.collection('fullstack-app-obj')
    })

    app.listen(process.env.PORT || PORT, () => {
        console.log(`your server is running on port`)
    })