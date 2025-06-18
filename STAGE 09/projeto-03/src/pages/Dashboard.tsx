import { useState } from "react";
import { Input } from "../components/Input";
import search from "../assets/search.svg"
import { Button } from "../components/Button";
import { Items, type ItemProps } from "../components/Items";
import { CATEGORIES } from "../utils/categories";
import { format } from "../utils/format";
import { Pagination } from "../components/Pagination";

export const example = {
   id: "1",
   name: "Franz",
   category: "Outros",
   value: format(56.8),
   categoryImg: CATEGORIES["others"].icon
}

export function Dashboard(){
   const [name, setName] = useState("")
   const [page, setPage] = useState(1)
   const [total, setTotal] = useState(10)
   const [refunds, setRefunds] = useState<ItemProps[]>([example])

   function searchName(e: React.FormEvent){
      e.preventDefault()
      console.log(name)
   }

   function pagination(action: "next" | "previous"){
      setPage((prev) => {
         if(action === "next" && prev < total){
            return prev + 1
         }

         if(action === "previous" && prev > 1){
            return prev - 1
         }

         return prev
      })
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

         <div className="flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
            {refunds.map((item) => <Items key={item.id} data={item} href={`/refund/${item.id}`} />)}
         </div>

         <Pagination current={page} total={total} onNext={() => pagination("next")} onPrevious={() => pagination("previous")} />
      </div>
   )
}