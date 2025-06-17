import { useState } from "react";
import { Input } from "../components/Input";
import search from "../assets/search.svg"
import { Button } from "../components/Button";

export function Dashboard(){
   const [name, setName] = useState("")

   function searchName(e: React.FormEvent){
      e.preventDefault()
      console.log(name)
   }

   return (
      <div className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 md:min-w-[768px]">
         <h1 className="text-gray-100 font-bold flex-1">Solicitações</h1>

         <form onSubmit={searchName} className="flex flex-1 gap-3 items-center pb-6 border-b-1 border-b-gray-400">
            <Input id="search" placeholder="Pesquise pelo nome" onChange={(e) => setName(e.target.value)}/>

            <Button variant="icon" type="submit">
               <img src={search} alt="Ícone de pesquisar" />
            </Button>
         </form>

         <div>

         </div>
      </div>
   )
}