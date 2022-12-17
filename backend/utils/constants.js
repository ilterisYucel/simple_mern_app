const Constants = {
    responseStatus: {
        OK: 'OK',
        FAIL: 'FAIL',
    },
    responseMessage: {
        ROOT_MESSAGE: 'Success from SarSystem API ROOT.',
        GET_REQUEST_FAIL: 'Get request is failed.',
        GET_REQUEST_SUCCESS: 'Get request is success.'
    },
    responseCode: {
        SUCCESS: 200,
        CREATED: 201,
        BAD_REQUEST: 400,
        NOT_FOUND: 404,
        SERVER_ERROR: 500,
    }
};

module.exports = Constants;