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
exports.UserService = void 0;
const error_1 = __importDefault(require("../modules/error"));
const calendar_1 = require("./calendar");
function create(calendar_id, createUserDTO) {
    return __awaiter(this, void 0, void 0, function* () {
        const calendar = yield calendar_1.CalendarService.getOneDocument(calendar_id);
        const user = Object.assign({ schedules: [] }, createUserDTO);
        calendar.users.push(user);
        yield calendar.save();
        return calendar.users[calendar.users.length - 1];
    });
}
function getAll(calendar_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield calendar_1.CalendarService.getOne(calendar_id).then((calendar) => calendar.users);
    });
}
function getIndexOrFail(calendar, user_id) {
    const index = calendar.users.findIndex((user) => {
        const parseId = JSON.stringify(user._id).replace(/"/g, '');
        return parseId === user_id;
    });
    if (index === -1) {
        throw new error_1.default(404, `User ${user_id} not found`);
    }
    return index;
}
function update(calendar_id, user_id, updateUserDTO) {
    return __awaiter(this, void 0, void 0, function* () {
        const calendar = yield calendar_1.CalendarService.getOneDocument(calendar_id);
        const index = getIndexOrFail(calendar, user_id);
        const user = calendar.users[index];
        calendar.users[index] = Object.assign(Object.assign({}, user), updateUserDTO);
        return calendar.save();
    });
}
function remove(calendar_id, user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const calendar = yield calendar_1.CalendarService.getOneDocument(calendar_id);
        const user_index = getIndexOrFail(calendar, user_id);
        console.log('hi : ', user_index);
        calendar.users = calendar.users.filter((_, index) => index !== user_index);
        return calendar.save();
    });
}
exports.UserService = {
    create,
    getAll,
    getIndexOrFail,
    update,
    remove,
};
