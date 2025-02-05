import { Request, Response, NextFunction } from "express"

export function mine(request: Request, response: Response, next: NextFunction) {
   request.user_id = 4535

   console.log("Deu certo")

   return next()
}