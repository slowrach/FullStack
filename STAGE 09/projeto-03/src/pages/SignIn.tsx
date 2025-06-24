import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn(){
   const [loading, setLoading] = useState(false)

   function submit(formData: FormData){
      console.log(formData.get("email"))
   }

   return (
      <form action={submit} className="w-full flex flex-col gap-4">
         <Input required name="email" legend="e-mail" type="email" />

         <Input required name="password" legend="senha" type="password" />

         <Button type="submit" loading={loading}>Entrar</Button>

         <a href="/signup" className="text-sm text-center text-gray-200 font-semibold mt-5 hover:text-green-100 transition ease-linear">Criar conta</a>
      </form>
   )
}