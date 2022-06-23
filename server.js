const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongobd').MongoClient
require('dotenv').config()
const PORT = 2000

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