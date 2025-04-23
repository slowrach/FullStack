import { Request, Response } from "express"
import { z, ZodError } from "zod"
import * as uploadConfig from "@/configs/upload"
import { DiskStorage } from "@/providers/disk-storage"
import { AppError } from "@/utils/AppError"

export class UploadFuncs {
   async create(request: Request, response: Response) {
      const diskStorage = new DiskStorage()

      try {
         const fileSchema = z.object({
            filename: z.string().min(1),
            mimetype: z.string().refine((type) => uploadConfig.ACCEPTED_IMAGE_TYPES.includes(type), `Formato de arquivo inválido. Aceitos: ${uploadConfig.ACCEPTED_IMAGE_TYPES}`),
            size: z.number().positive().refine((size) => size <= uploadConfig.MAX_FILE_SIZE, `Arquivo excede o tamanho de ${uploadConfig.MAX_FILE_SIZE} bytes`)
         }).passthrough()
         
         const file = fileSchema.parse(request.file)
         const filename = await diskStorage.saveFile(file.filename)


         response.json({ filename })
      } catch (error) {
         if(error instanceof ZodError){
            if(request.file){
               await diskStorage.deleteFile(request.file.filename, "tmp")
            }

            throw new AppError(error.issues[0].message)
         }
         
         throw error
      }
   }
}