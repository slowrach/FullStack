import { Request, Response, NextFunction } from "express"
import {jwtVerify} from "jose"
import { authConfig } from "@/configs/auth"
import { AppError } from "@/utils/AppError"

interface TokenPayLoad {
   payload: {
      iss: string
      sub: string
   }
}

export async function authenticated(request: Request, response: Response, next: NextFunction){
   try {
      const authHeader = request.headers.authorization

      if (!authHeader){
         throw new AppError("JWT not found", 401)
      }

      const [, token] = authHeader.split(" ")
      
      const {
         payload: {
            iss: role,
            sub: user_id
         }
      } = await jwtVerify(token, authConfig.jwt.secret) as TokenPayLoad

      request.user = {
         id: user_id,
         role,
      }

      return next()
   } catch (error) {
      throw new AppError("Invalid JWT", 401)
   }
}