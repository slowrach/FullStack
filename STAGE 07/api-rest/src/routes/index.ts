import { Router } from "express"
import { productsRoutes } from "./products"

export const routes = Router()

routes.use("/products", productsRoutes)