import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignUp(){
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("")
   const [loading, setLoading] = useState(false)

   function submit(e: React.FormEvent){
      e.preventDefault()

      console.log("cadastrado")
   }

   return (
      <form onSubmit={submit} className="w-full flex flex-col gap-4">
         <Input required legend="nome" onChange={(e) => setName(e.target.value)} />

         <Input required legend="e-mail" type="email" onChange={(e) => setEmail(e.target.value)} />

         <Input required legend="senha" type="password" onChange={(e) => setPassword(e.target.value)} />

         <Input required legend="confirme a senha" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />

         <Button type="submit" loading={loading}>Cadastrar</Button>

         <a href="/" className="text-sm text-center text-gray-200 font-semibold mt-5 hover:text-green-100 transition ease-linear">Já tenho uma conta</a>
      </form>
   )
}