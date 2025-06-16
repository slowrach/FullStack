import { useState } from "react";
import { useNavigate } from "react-router";
import { CATEGORIES, KEYS } from "../utils/categories";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";

export function Refund(){
   const [name, setName] = useState("")
   const [category, setCategory] = useState("")
   const [value, setValue] = useState("")
   const [loading, setLoading] = useState(false)
   const [filename, setFilename] = useState<File | null>(null)

   const navigate = useNavigate()

   function submit(e: React.FormEvent){
      e.preventDefault()

      console.log(name, category, value, filename)

      navigate("/confirm", { state: { fromSubmit: true } })
   }

   return (
      <form onSubmit={submit} className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]">
         <header>
            <h1 className="text-xl font-bold text-gray-100">Solicitação de reembolso</h1>

            <p className="text-sm text-gray-200 mt-2 mb-4">Dados para solicitação de reembolso</p>
         </header>

         <Input required legend="nome da solicitação" value={name} onChange={(e) => setName(e.target.value)} />
         
         <div className="flex gap-4">
            <Select required legend="categoria" value={category} onChange={(e) => setCategory(e.target.value)}>
               {KEYS.map((op) => (
                  <option key={op} value={op}>
                     {CATEGORIES[op].name}
                  </option>
               ))}
            </Select>
   
            <Input required legend="valor" value={value} onChange={(e) => setValue(e.target.value)} />
         </div>

         <Upload filename={filename && filename.name} onChange={(e) => e.target.files &&setFilename(e.target.files[0])}/>

         <Button type="submit" loading={loading}>Enviar</Button> 
      </form>
   )
}