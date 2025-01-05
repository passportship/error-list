"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotImplementedHttpError = exports.ServerHttpError = exports.TooManyRequestsHttpError = exports.ValidationHttpError = exports.UnprocessableEntityHttpError = exports.UnsupportedMediaTypeHttpError = exports.GoneHttpError = exports.NotAcceptableHttpError = exports.MethodNotAllowedHttpError = exports.NotFoundHttpError = exports.ForbiddenHttpError = exports.UnauthorizedHttpError = exports.BadRequestHttpError = exports.HttpError = exports.BaseError = void 0;
const http = require("http");
class BaseError extends Error {
    code;
    time;
    constructor(message, code = 0) {
        super(message);
        this.code = code;
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.time = new Date();
    }
}
exports.BaseError = BaseError;
/**
 *
 * @param statusCode HTTP status code, such as 403, 404, 500, etc.
 * @param message
 * @param code
 */
class HttpError extends BaseError {
    statusCode;
    statusMessage;
    constructor(statusCode = 500, message, code) {
        super(message, code);
        this.statusCode = statusCode;
        this.statusMessage = http.STATUS_CODES[statusCode];
    }
}
exports.HttpError = HttpError;
class BadRequestHttpError extends HttpError {
    constructor(message, code) {
        super(400, message, code);
    }
}
exports.BadRequestHttpError = BadRequestHttpError;
class UnauthorizedHttpError extends HttpError {
    constructor(message, code) {
        super(401, message, code);
    }
}
exports.UnauthorizedHttpError = UnauthorizedHttpError;
class ForbiddenHttpError extends HttpError {
    constructor(message, code) {
        super(403, message, code);
    }
}
exports.ForbiddenHttpError = ForbiddenHttpError;
class NotFoundHttpError extends HttpError {
    constructor(message, code) {
        super(404, message, code);
    }
}
exports.NotFoundHttpError = NotFoundHttpError;
class MethodNotAllowedHttpError extends HttpError {
    constructor(message, code) {
        super(405, message, code);
    }
}
exports.MethodNotAllowedHttpError = MethodNotAllowedHttpError;
class NotAcceptableHttpError extends HttpError {
    constructor(message, code) {
        super(406, message, code);
    }
}
exports.NotAcceptableHttpError = NotAcceptableHttpError;
class GoneHttpError extends HttpError {
    constructor(message, code) {
        super(410, message, code);
    }
}
exports.GoneHttpError = GoneHttpError;
class UnsupportedMediaTypeHttpError extends HttpError {
    constructor(message, code) {
        super(415, message, code);
    }
}
exports.UnsupportedMediaTypeHttpError = UnsupportedMediaTypeHttpError;
class UnprocessableEntityHttpError extends HttpError {
    constructor(message, code) {
        super(422, message, code);
    }
}
exports.UnprocessableEntityHttpError = UnprocessableEntityHttpError;
class ValidationHttpError extends HttpError {
    errors;
    constructor(errors, message = 'Validation Failed', statusCode = 422, code) {
        super(statusCode, message, code);
        this.errors = errors;
    }
}
exports.ValidationHttpError = ValidationHttpError;
class TooManyRequestsHttpError extends HttpError {
    constructor(message, code) {
        super(429, message, code);
    }
}
exports.TooManyRequestsHttpError = TooManyRequestsHttpError;
class ServerHttpError extends HttpError {
    constructor(message, code) {
        super(500, message, code);
    }
}
exports.ServerHttpError = ServerHttpError;
class NotImplementedHttpError extends HttpError {
    constructor(message, code) {
        super(501, message, code);
    }
}
exports.NotImplementedHttpError = NotImplementedHttpError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBNkI7QUFPN0IsTUFBYSxTQUFVLFNBQVEsS0FBSztJQUdLO0lBRjVCLElBQUksQ0FBTztJQUVwQixZQUFZLE9BQWdCLEVBQVMsT0FBZSxDQUFDO1FBQ2pELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURrQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBR2pELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Q0FDSjtBQVhELDhCQVdDO0FBTUQ7Ozs7O0dBS0c7QUFDSCxNQUFhLFNBQVUsU0FBUSxTQUFTO0lBR2pCO0lBRlosYUFBYSxDQUFxQjtJQUV6QyxZQUFtQixhQUFxQixHQUFHLEVBQUUsT0FBZ0IsRUFBRSxJQUFhO1FBQ3hFLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFETixlQUFVLEdBQVYsVUFBVSxDQUFjO1FBR3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0o7QUFSRCw4QkFRQztBQUVELE1BQWEsbUJBQW9CLFNBQVEsU0FBUztJQUM5QyxZQUFZLE9BQWdCLEVBQUUsSUFBYTtRQUN2QyxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7QUFKRCxrREFJQztBQUVELE1BQWEscUJBQXNCLFNBQVEsU0FBUztJQUNoRCxZQUFZLE9BQWdCLEVBQUUsSUFBYTtRQUN2QyxLQUFL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