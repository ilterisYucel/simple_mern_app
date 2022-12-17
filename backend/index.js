const express = require('express');
const cors = require('cors');
const constants = require('./utils/constants');
const dbConnect = require('./db/mongo');
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;
const corsOptions = {
    origin: '*'
};


const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', require('./user/router'));


app.get('/', (req, res) => {
    res.status(constants.responseCode.SUCCESS).send({
        'status': constants.responseStatus.OK,
        'message': constants.responseMessage.ROOT_MESSAGE,
    });
});

app.listen(PORT, HOST, () => {
    dbConnect()
        .then(connection => {
            global.dbConnection = connection;
            console.log('DB connected!');
            console.log(`App listening on http://${HOST}:${PORT}`);
        })
        .catch(err => {
            console.error('DB connection is not success!')
            throw err;
        });
});