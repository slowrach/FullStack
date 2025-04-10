import express from "express"
import cors from "cors"
import { errors } from "./middlewares/errors"

export const app = express()
app.use(cors())
app.use(express.json())



app.use(errors)
