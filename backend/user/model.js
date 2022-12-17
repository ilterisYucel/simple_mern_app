require('dotenv').config();

const getUsers = (queryParams, callback) => {
    const db = dbConnection.db(process.env.MONGO_DBNAME);
    const collection = db.collection(process.env.MONGO_COLLECTIONNAME)
        .find({}, Object.keys(queryParams).length === 0 ? {} : {projection : JSON.parse(queryParams.filter).reduce((a, v) => ({ ...a,  [v] : 1 }), {})})
        .sort(Object.keys(queryParams).length === 0 ? {} : JSON.parse(queryParams.sort).reduce((a, v) => ({ ...a,  [v] : parseInt(queryParams.desc) ? -1 : 1 }), {}))
        .skip(Object.keys(queryParams).length === 0 ? 0 : parseInt(queryParams.offset) * parseInt(queryParams.limit))
        .limit(Object.keys(queryParams).length === 0 ? 0 : parseInt(queryParams.limit))
        .toArray(callback);
};

const getUsersCount = (callback) => {
    const db = dbConnection.db(process.env.MONGO_DBNAME);
    const collection = db.collection(process.env.MONGO_COLLECTIONNAME)
        .count(callback);
}

module.exports = {
    getUsers,
    getUsersCount
};
