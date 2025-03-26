import { Router } from "express"
import { TeamFuncs } from "../funcs/team-funcs"

export const teamRoutes = Router()
const teamFuncs = new TeamFuncs()

teamRoutes.post("/", teamFuncs.create)