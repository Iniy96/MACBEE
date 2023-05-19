
import configureMulter from "../controller/multer.js"

import express from "express";
import { sendResume,sendEnquiry } from "../controller/controller.js";

const router = express.Router();
const upload = configureMulter();

router.post("/SendResume",upload.single("resume"),sendResume );

router.post("/SendEnquiry",upload.single("document"),sendEnquiry );

router.post("/test",upload.single("document"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    res.json("I got it in backend")
})

export default router;
