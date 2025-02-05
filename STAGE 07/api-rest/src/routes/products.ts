import { Router } from "express"
import { ProductsFunc } from "../funcs/productsFunc"

export const productsRoutes = Router()
const productsFunc = new ProductsFunc()

productsRoutes.get("/", productsFunc.index)

productsRoutes.post("/", productsFunc.create)