"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http = require("http");
const errors_1 = require("./errors");
const errorHandler = function (debugMode = false) {
    return function (err, req, res, next) {
        const statusCode = err.statusCode || 500;
        const data = {
            message: 'Internal Server Error'
        };
        if (err instanceof errors_1.HttpError) {
            data.message = err.message === '' ? http.STATUS_CODES[statusCode] : err.message;
        }
        if (err.code !== undefined) {
            data.code = err.code;
        }
        if (err.errors !== undefined) {
            data.errors = err.errors;
        }
        const time = (err.time || new Date()).toUTCString().slice(5, -4);
        if (debugMode && statusCode >= 500) {
            console.error(time, err.stack);
        }
        else {
            console.log(time, '- [error]', data.message);
        }
        res.status(statusCode).json(data);
    };
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9lcnJvci1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUE2QjtBQUM3QixxQ0FBcUM7QUFFOUIsTUFBTSxZQUFZLEdBQUcsVUFBVSxZQUFxQixLQUFLO0lBQzVELE9BQU8sVUFBVSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxJQUFTO1FBQ3BELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDO1FBRXpDLE1BQU0sSUFBSSxHQUFvRDtZQUMxRCxPQUFPLEVBQUUsdUJBQXVCO1NBQ25DLENBQUM7UUFFRixJQUFJLEdBQUcsWUFBWSxrQkFBUyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUNwRixDQUFDO1FBRUQsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN6QixDQUFDO1FBRUQsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUM3QixDQUFDO1FBRUQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakUsSUFBSSxTQUFTLElBQUksVUFBVSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDO2FBQU0sQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQTlCVyxRQUFBLFlBQVksZ0JBOEJ2QiJ9