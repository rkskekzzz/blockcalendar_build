"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const env_file = process.env.NODE_ENV === "production"
    ? "./env/.env.production"
    : "./env/.env.development";
dotenv_1.default.config({ path: path_1.default.join(path_1.default.resolve(), env_file) });
function configCheck(key) {
    const value = process.env[key];
    if (value == null) {
        throw new Error(`Key ${key} is undefined`);
    }
    return value;
}
exports.default = {
    host: {
        port: parseInt(configCheck("HOST_PORT")),
    },
    db: {
        host: configCheck("DB_HOST"),
        port: parseInt(configCheck("DB_PORT")),
        user: configCheck("DB_USER"),
        password: configCheck("DB_PASSWORD"),
    },
};
