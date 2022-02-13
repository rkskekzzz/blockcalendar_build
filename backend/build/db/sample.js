"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleUser = void 0;
const entity_1 = require("../interface/entity");
exports.sampleUser = {
    name: "sample",
    color: "#ff0000",
    schedules: [
        {
            valid: entity_1.ScheduleValidType.POSIBLE,
            start: Date.now().toString(),
            end: Date.now().toString(),
        },
        {
            valid: entity_1.ScheduleValidType.IMPOSIBLE,
            start: (Date.now() + 1).toString(),
            end: (Date.now() + 1).toString(),
        },
    ],
};
