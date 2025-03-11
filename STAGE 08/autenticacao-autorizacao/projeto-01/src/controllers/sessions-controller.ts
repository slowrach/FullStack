import { AppError } from "@/utils/AppError"
import { Request, Response } from "express"
import { authConfig } from "@/configs/auth"
import { sign } from "jsonwebtoken"

class SessionsController {
  async create(request: Request, response: Response) {
    const { username, password } = request.body

    const fakeUser = {
      id: "1",
      username: "gradey",
      password: "gd2025",
      role: "admin"
    }

    if(username !== fakeUser.username || password !== fakeUser.password) {
      throw new AppError("Username e/ou senha incorreta", 401)
    }

    const { secret, expiresIn } = authConfig.jwt
    const token = sign({ role: fakeUser.role }, secret, {
      expiresIn,
      subject: String(fakeUser.id)
    })

    return response.status(201).json({ token })
  }
}

export { SessionsController }
