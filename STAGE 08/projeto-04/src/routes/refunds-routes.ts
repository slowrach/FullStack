import { Router } from "express"
import { RefundFuncs } from "@/funcs/refunds-funcs"
import { authorization } from "@/middlewares/authorization"

export const refundRoutes = Router()
const refundFuncs = new RefundFuncs()

refundRoutes.post("/", authorization(["employee"]), refundFuncs.create)

refundRoutes.get("/", authorization(["manager"]), refundFuncs.index)

refundRoutes.get("/:id", authorization(["employee", "manager"]), refundFuncs.show)