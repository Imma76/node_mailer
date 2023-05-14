import express from 'express';
import mailController from './mail.controller.js';
const mailRouter = express.Router();

mailRouter.post("/",mailController.sendMail);

export default mailRouter;