import express, { Request, Response, NextFunction } from "express"
import { mine } from "./middlewares/mine"
import { routes } from "./routes"
import { AppError } from "./utils/appError"
import { ZodError } from "zod"

const PORT = 3333

const app = express()

app.use(express.json())

app.use(mine)

app.use(routes)

app.use((error: any, request: Request, response: Response, next: NextFunction) => {
   if (error instanceof AppError) {
      response.status(error.statusCode).send(error.message)
   }

   if (error instanceof ZodError) {
      response.status(400).json({ message: "Validation Error", issues: error.format() })
   }

   response.status(500).send(error.message)
})

app.listen(PORT, () => console.log("Server funcionando"))