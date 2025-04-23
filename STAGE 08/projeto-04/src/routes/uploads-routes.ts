import { Router } from "express"
import multer from "multer"
import * as uploadConfig from "@/configs/upload"
import { UploadFuncs } from "@/funcs/uploads-funcs"
import { authorization } from "@/middlewares/authorization"

export const uploadRoutes = Router()
const uploadFuncs = new UploadFuncs()

const upload = multer(uploadConfig.MULTER)

uploadRoutes.post("/", authorization(["employee"]), upload.single("file"), uploadFuncs.create)