import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseTitel: {
        type: String,
        required: true
    },
    subTitel: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    courseLavel: {
        type: String,
        enum: ["Beginner", "Medium", "Advance"]
    },
    coursePrice: {
        type: Number
    },
    courseThumbnail: {
        type: String
    },
    enrolledStudents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    lectures: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Lecture"
        }
    ],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    isPublished: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export const Course = mongoose.model("Course", courseSchema);