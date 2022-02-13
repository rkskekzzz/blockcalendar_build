"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleUser = void 0;
const entity_1 = require("../interface/entity");
function getDay(offsetFromToday) {
    const curr = new Date();
    const day = new Date(curr.getFullYear(), curr.getMonth() + 1, curr.getDate() + offsetFromToday, 24);
    return day.toISOString();
}
exports.sampleUser = {
    name: "sample",
    color: "#ff0000",
    schedules: [
        {
            valid: entity_1.ScheduleValidType.POSIBLE,
            start: getDay(0),
            end: getDay(0),
        },
        {
            valid: entity_1.ScheduleValidType.IMPOSIBLE,
            start: getDay(1),
            end: getDay(1),
        },
    ],
};
