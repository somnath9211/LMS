import express from 'express';
import isAuthenticated from '../middleWares/isAuthenticated.js';
import { createCourse } from '../controllers/course.controler.js';

const router = express.Router();

router.route("/").post(isAuthenticated, createCourse);

export default router;