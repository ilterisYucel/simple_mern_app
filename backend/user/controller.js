const constant = require('../utils/constants');
const model = require('./model');
const {request} = require("express");

const getUsers = (req, res, next) => {
    const queryParams = {...req.query};
    model.getUsers(queryParams, (err, result) => {
        if(err){
            return res.status(constant.responseCode.SERVER_ERROR).json({
                status: constant.responseStatus.FAIL,
                message: constant.responseMessage.GET_REQUEST_FAIL,
                data: []
            });
        }
        return res.status(constant.responseCode.SUCCESS).json({
            status: constant.responseStatus.OK,
            message: constant.responseMessage.GET_REQUEST_SUCCESS,
            data: result
        });
    });
};

const getUsersCount = (req, res, next) => {
    model.getUsersCount((err, result) => {
        if(err) {
            return res.status(constant.responseCode.SERVER_ERROR).json({
                status: constant.responseStatus.FAIL,
                message: constant.responseMessage.GET_REQUEST_FAIL,
                data: result
            });
        }
        return res.status(constant.responseCode.SUCCESS).json({
            status: constant.responseStatus.OK,
            message: constant.responseMessage.GET_REQUEST_SUCCESS,
            data: result
        });
    });
};

module.exports = {
    getUsers,
    getUsersCount
};