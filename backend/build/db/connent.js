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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
const mongooseConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    const host = config_1.default.db.host;
    const port = config_1.default.db.port;
    const user = config_1.default.db.user;
    const password = config_1.default.db.password;
    const connect = `mongodb://${user}:${password}@${host}:${port}`;
    console.log(connect);
    try {
        yield mongoose_1.default.connect(connect);
    }
    catch (e) {
        throw new Error(`
      ##################################
      ❗️  Mongo DB connection Failed! ❗️
      ##################################
    `);
    }
});
exports.mongooseConnect = mongooseConnect;
