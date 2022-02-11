"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.errorPageNotFound = void 0;
require("express-async-errors");
class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.default = ApiError;
function errorPageNotFound(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        throw new ApiError(404, `Page Not Found`);
    });
}
exports.errorPageNotFound = errorPageNotFound;
function errorHandler(error, req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const statusCode = error.statusCode || 500;
        const message = error.message || "server error";
        res.status(statusCode).send(message);
    });
}
exports.errorHandler = errorHandler;
