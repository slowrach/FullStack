import express from "express"
import { routes } from "./routes/index"
import { errors } from "../src/middlewares/errors"

export const app = express()

app.use(express.json())

app.use(routes)

app.use(errors)