"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    postId: {
        type: String,
        required: true,
    },
    creatorUid: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    userProfileUrl: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: [String],
    },
    totalReplays: {
        type: Number,
    }
});
exports.default = (0, mongoose_1.model)("comment", commentSchema);
