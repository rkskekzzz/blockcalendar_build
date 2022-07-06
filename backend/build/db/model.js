"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const entity_1 = require("../interface/entity");
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    start: { type: String, required: false },
    end: { type: String, required: false },
    users: [
        {
            name: { type: String, required: true },
            color: { type: String, required: true },
            isSigned: { type: Boolean, required: false },
            schedules: [
                {
                    valid: {
                        type: String,
                        required: true,
                        enum: entity_1.ScheduleValidType,
                    },
                    start: { type: String, required: true },
                    end: { type: String, required: true },
                    posibleTime: {
                        type: [Number],
                        required: true,
                        default: [],
                    },
                    imposibleTime: {
                        type: [Number],
                        required: true,
                        default: [],
                    },
                },
            ],
        },
    ],
    meetingDays: { type: [String], required: false, default: [] },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Calendar', schema);
