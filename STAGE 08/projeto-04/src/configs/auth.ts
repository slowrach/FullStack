import { KeyObject } from "jose";
import { createSecretKey } from 'node:crypto'

export const authConfig: { jwt: { secret: KeyObject, expiresIn: `${number}D` } } = {
   jwt: {
      secret: createSecretKey("wethenorth", "utf-8"), 
      expiresIn: "1D",
   },
}