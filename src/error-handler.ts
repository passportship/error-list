import * as http from 'http';

export const errorHandler = function (debugMode) {
    return function (err, req, res, next) {
        const error: {message?, code?, errors?} = {
            message: err.message,
        };

        const statusCode = err.statusCode || 500;

        if (error.message === undefined) {
            error.message = http.STATUS_CODES[statusCode];
        }

        if (err.code !== undefined) {
            error.code = err.code;
        }

        if (err.errors !== undefined) {
            error.errors = err.errors;
        }

        const time = (err.time || new Date()).toUTCString().slice(5, -4);

        if (debugMode && statusCode >= 500) {
            console.error(time, err.stack);
        } else {
            console.log(time, '- [error]', error.message);
        }

        res.status(statusCode).json(error);
    };
};