"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
// 📆 캘린더 라우터
router.post('/', controllers_1.CalendarController.create);
router.get('/:calendar_id', controllers_1.CalendarController.getOne);
router.put('/:calendar_id', controllers_1.CalendarController.updateMeetingDays);
// 🙍‍♂️ 유저 라우터
router.post('/:calendar_id/users', controllers_1.UserController.create);
router.delete('/:calendar_id/users/:user_id', controllers_1.UserController.remove);
// 🎏 스케쥴 라우터
router.post('/:calendar_id/users/:user_id/schedule', controllers_1.ScheduleController.update);
exports.default = router;
