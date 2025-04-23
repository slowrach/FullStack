import express from "express"
import "express-async-errors"
import cors from "cors"
import { errors } from "./middlewares/errors"
import { routes } from "./routes"
import * as uploadConfig from "@/configs/upload"

export const app = express()
app.use(cors())
app.use(express.json())

app.use("/uploads", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)

app.use(errors)
