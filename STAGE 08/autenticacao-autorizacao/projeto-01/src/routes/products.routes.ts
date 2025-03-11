import { Router } from "express"
import { ProductsController } from "@/controllers/products-controller"
import { authenticated } from "@/middlewares/authenticated"
import { authorization } from "@/middlewares/authorization"

const productsRoutes = Router()
const productsController = new ProductsController()

productsRoutes.get("/", productsController.index)
productsRoutes.post("/", authenticated, authorization(["sale", "admin"]), productsController.create)

export { productsRoutes }
