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
exports.CalendarService = void 0;
const model_1 = __importDefault(require("../db/model"));
const error_1 = __importDefault(require("../modules/error"));
function create(createCalendarDTO) {
    return __awaiter(this, void 0, void 0, function* () {
        return model_1.default.create(createCalendarDTO);
    });
}
function getOneDocument(calendar_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const calendar = yield model_1.default.findById(calendar_id);
        if (!calendar) {
            throw new error_1.default(404, `Calendar ${calendar_id} not found`);
        }
        if (!calendar.meetingDays)
            calendar.meetingDays = [];
        return calendar;
    });
}
function getOne(calendar_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return getOneDocument(calendar_id);
    });
}
function updateMeetingDays(calendar_id, meetingDay) {
    return __awaiter(this, void 0, void 0, function* () {
        const calendar = yield model_1.default.findById(calendar_id);
        if (!calendar) {
            throw new error_1.default(404, `Calendar ${calendar_id} not found`);
        }
        if (calendar.meetingDays)
            calendar.meetingDays = [...calendar.meetingDays, meetingDay];
        else
            calendar.meetingDays = [meetingDay];
        calendar.save();
        return calendar;
    });
}
exports.CalendarService = {
    create,
    getOne,
    getOneDocument,
    updateMeetingDays,
};
