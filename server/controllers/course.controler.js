import { Course } from "../models/course.model.js";


export const createCourse = async (req, res) => {
    try {
        const { courseTitel, category } = req.body;
        if (!courseTitel || !category) {
            return res.status(400).json({
                message: " Course title and category is required"
            })
        }
        const course = await Course.create({
            courseTitel,
            category,
            creator: req.id
        });

        return res.status(201).json({
            course,
            message: "Course Created"
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: " Faild to create course"
        });

    }
}