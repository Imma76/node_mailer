import express from 'express';
import mailRouter from './mail.routes.js';

const router = express.Router();

router.use("/mail",mailRouter)

export default router