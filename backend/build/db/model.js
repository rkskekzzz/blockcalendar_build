"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const entity_1 = require("../interface/entity");
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: entity_1.CalendarType,
        default: entity_1.CalendarType.MONTHLY,
    },
    start: { type: String, required: false },
    end: { type: String, required: false },
    users: [
        {
            name: { type: String, required: true },
            color: { type: String, required: true },
            schedules: [
                {
                    valid: {
                        type: String,
                        required: true,
                        enum: entity_1.ScheduleValidType,
                    },
                    start: { type: String, required: true },
                    end: { type: String, required: true },
                },
            ],
        },
    ],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Calendar", schema);
