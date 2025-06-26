import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { CATEGORIES, KEYS } from "../utils/categories";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";
import file from "../assets/file.svg"
import { Info } from "../components/Info";
import { example } from "./Dashboard";

export function Refund(){
   const [name, setName] = useState("")
   const [category, setCategory] = useState("")
   const [value, setValue] = useState("")
   const [loading, setLoading] = useState(false)
   const [filename, setFilename] = useState<File | null>(null)

   const navigate = useNavigate()
   const params = useParams<{id: string}>()

   function submit(e: React.FormEvent){
      e.preventDefault()

      if(params.id){
         return navigate(-1)
      }

      console.log(name, category, value, filename)

      navigate("/confirm", { state: { fromSubmit: true } })
   }

   return (
      <form onSubmit={submit} className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]">
         <header>
            <h1 className="text-xl font-bold text-gray-100">Solicitação de reembolso</h1>

            <p className="text-sm text-gray-200 mt-2 mb-4">Dados para solicitação de reembolso</p>
         </header>

         {params.id ? (
            <div>
               <Info title="Nome" info={example.name} />

               <Info title="Categoria" info={example.category} />

               <Info title="Valor" info={example.value} />

               <a target="_blank" className="flex justify-center gap-2 text-sm font-semibold text-green-100 cursor-pointer hover:opacity-70 mt-7 mb-3">
                  <img src={file} alt="Ícone de comprovante" />
                  Abrir comprovante
               </a>
            </div>
         ) : (
            <div className="flex flex-col gap-4">
               <Input required legend="nome da solicitação" value={name} onChange={(e) => setName(e.target.value)} disabled={!!params.id} />

               <div className="flex gap-4">
                  <Select required legend="categoria" value={category} onChange={(e) => setCategory(e.target.value)} disabled={!!params.id}>
                  {KEYS.map((op) => (
                     <option key={op} value={op}>
                        {CATEGORIES[op].name}
                     </option>
                  ))}
                  </Select>

                  <Input required legend="valor" value={value} onChange={(e) => setValue(e.target.value)} disabled={!!params.id} />
               </div>

               <Upload filename={filename && filename.name} onChange={(e) => e.target.files &&setFilename(e.target.files[0])}/>
            </div>
         )}

         <Button type="submit" loading={loading}>
               { params.id ? "Voltar" : "Enviar" }
         </Button> 
      </form>
   )
}