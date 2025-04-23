import { Router } from "express"
import { UserFuncs } from "@/funcs/users-funcs"

export const userRoutes = Router()
const userFuncs = new UserFuncs()

userRoutes.post("/", userFuncs.create)