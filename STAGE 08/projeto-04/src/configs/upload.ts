import multer from "multer"
import path from "node:path"
import crypto from "node:crypto"
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp")
export const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads")

export const MAX_FILE_SIZE = 1024 * 1024 * 3 // 3MB
export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"]

export const MULTER = {
   storage: multer.diskStorage({
      destination: TMP_FOLDER,
      filename(request, file, callback){
         const fileHash = crypto.randomBytes(10).toString("hex")
         const fileName = `${fileHash}-${file.originalname}`

         return callback(null, fileName)
      }
   })
}
