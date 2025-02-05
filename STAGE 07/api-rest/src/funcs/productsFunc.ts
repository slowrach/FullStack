import { Request, Response } from "express"
import { AppError } from "../utils/appError"
import { z } from "zod"

export class ProductsFunc {
   index(request: Request, response: Response) {
      const {page} = request.query
      
      response.send(`Página ${page}`)
   }

   create(request: Request, response: Response) {
      const bodySchema = z.object({
         name: z.string({ required_error: "Name is required" }),
         price: z.number({ required_error: "Price is required" }).positive().gte(5)
      })

      const { name, price } = bodySchema.parse(request.body)

      // if(!name || !price) {
      //    throw new AppError("Informe o nome e o preço do produto")
      // }

      // if (price < 0) {
      //    throw new AppError("O preço do produto não pode ser menor do que R$0,00")
      // }

      response.status(201).json({ id: request.user_id, name, price })
   }
}


/*
- index: GET para listar vários registros
- show: GET para exibir um registro específico
- create: POST para criar um registro
- update: PUT para atualizar um registro 
- remove: DELETE para deletar um registro
*/