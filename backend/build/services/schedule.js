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
exports.ScheduleService = void 0;
const calendar_1 = require("./calendar");
const _1 = require(".");
function update(calendar_id, user_id, updateSchduleDTO) {
    return __awaiter(this, void 0, void 0, function* () {
        const calendar = yield calendar_1.CalendarService.getOneDocument(calendar_id);
        const index = _1.UserService.findIndexOrFail(calendar, user_id);
        const user = calendar.users[index];
        user.schedules = updateSchduleDTO.schedules;
        return calendar.save();
    });
}
exports.ScheduleService = {
    update,
};
