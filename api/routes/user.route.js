import express from 'express';
import { test } from '../controllers/user.controller.js';
//define the route for testing api for user
const userRouter = express.Router();
//test route for user
userRouter.get('/test', test);
//
export default userRouter;
