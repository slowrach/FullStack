import { Router } from "express"
import { userRoutes } from "./users-routes"
import { sessionRoutes } from "./sessions-routes"
import { refundRoutes } from "./refunds-routes"
import { uploadRoutes } from "@/routes/uploads-routes"
import { authenticated } from "@/middlewares/authenticated"

export const routes = Router()

routes.use("/users", userRoutes)
routes.use("/sessions", sessionRoutes)
routes.use("/refunds", authenticated, refundRoutes)
routes.use("/uploads", authenticated, uploadRoutes)