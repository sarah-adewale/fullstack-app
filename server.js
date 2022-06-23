const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongobd').MongoClient
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING, //
    dbName = '',
    collection = 