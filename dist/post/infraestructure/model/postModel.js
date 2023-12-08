"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    creatorUid: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    postImageUrl: {
        type: String,
    },
    likes: {
        type: [String],
    },
    totalLikes: {
        type: Number,
    },
    totalComments: {
        type: Number,
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    userProfileUrl: {
        type: String,
    },
});
exports.default = (0, mongoose_1.model)("post", postSchema);
