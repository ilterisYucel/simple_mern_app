const mongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const connect = () => {
    return new Promise((resolve, reject) => {
        mongoClient.connect(process.env.MONGO_ATLAS_URI)
            .then(connection => {
                resolve(connection);
            })
            .catch(err => {
                reject(err);
            });
    });
};

module.exports = connect;