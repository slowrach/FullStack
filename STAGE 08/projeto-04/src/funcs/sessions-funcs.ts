import { prisma } from "@/database/prisma"
import { AppError } from "@/utils/AppError"
import { Request, Response } from "express"
import { z } from "zod"
import { compare } from "bcrypt"
import { authConfig } from "@/configs/auth"
import { SignJWT } from "jose"
 
export class SessionFuncs {
   async create(request: Request, response: Response){
      const bodySchema = z.object({
         email: z.string().email(),
         password: z.string(),
      })

      const { email, password } = bodySchema.parse(request.body)

      const user = await prisma.user.findFirst({ where: { email } })

      if(!user){
         throw new AppError("Invalid email or password", 401)
      }

      const samePassword = await compare(password, user.password)

      if(!samePassword){
         throw new AppError("Invalid email or password", 401)
      }

      const { secret, expiresIn } = authConfig.jwt

      const token = await new SignJWT()
         .setProtectedHeader({ alg: 'HS256' })
         .setIssuer(user.role)
         .setSubject(user.id)
         .setExpirationTime(expiresIn)
         .sign(secret)

      const { password: justPassword, ...withoutPassword } = user

      response.json({ token, user: withoutPassword })
   }
}