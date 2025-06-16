import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn(){
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [loading, setLoading] = useState(false)

   function submit(e: React.FormEvent){
      e.preventDefault()

      console.log(email, password)
   }

   return (
      <form onSubmit={submit} className="w-full flex flex-col gap-4">
         <Input required legend="e-mail" type="email" onChange={(e) => setEmail(e.target.value)} />

         <Input required legend="senha" type="password" onChange={(e) => setPassword(e.target.value)} />

         <Button type="submit" loading={loading}>Entrar</Button>

         <a href="/signup" className="text-sm text-center text-gray-200 font-semibold mt-5 hover:text-green-100 transition ease-linear">Criar conta</a>
      </form>
   )
}