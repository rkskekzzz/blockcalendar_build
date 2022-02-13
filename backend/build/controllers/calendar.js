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
exports.CalendarController = void 0;
const services_1 = require("../services");
require("express-async-errors");
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const createCalendarDTO = req.body;
        const calendar = yield services_1.CalendarService.create(createCalendarDTO);
        return res.status(200).json(calendar);
    });
}
function getOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const calendar_id = req.params.calendar_id;
        const calendar = yield services_1.CalendarService.getOne(calendar_id);
        return res.status(200).json(calendar);
    });
}
exports.CalendarController = {
    create,
    getOne,
};
