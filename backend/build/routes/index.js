"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
// π μΊλ¦°λ λΌμ°ν°
router.post('/', controllers_1.CalendarController.create);
router.get('/:calendar_id', controllers_1.CalendarController.getOne);
router.put('/:calendar_id', controllers_1.CalendarController.updateMeetingDays);
// πββοΈ μ μ  λΌμ°ν°
router.post('/:calendar_id/users', controllers_1.UserController.create);
router.put('/:calendar_id/users', controllers_1.UserController.update);
router.delete('/:calendar_id/users/:user_id', controllers_1.UserController.remove);
// π μ€μΌμ₯΄ λΌμ°ν°
router.post('/:calendar_id/users/:user_id/schedule', controllers_1.ScheduleController.update);
exports.default = router;
