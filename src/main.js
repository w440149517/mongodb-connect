const MongoClient = require('mongodb').MongoClient

async function initMongo(db, collection, json) {
    const client = await MongoClient.connect('mongodb://localhost:27017/')
    client.db(db).collection(collection).insertMany(json)
}

initMongo('platformSalses', 'assemblyProject')