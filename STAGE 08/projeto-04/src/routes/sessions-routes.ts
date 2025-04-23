import { Router } from "express"
import { SessionFuncs } from "@/funcs/sessions-funcs"

export const sessionRoutes = Router()
const sessionFuncs = new SessionFuncs()

sessionRoutes.post("/", sessionFuncs.create)