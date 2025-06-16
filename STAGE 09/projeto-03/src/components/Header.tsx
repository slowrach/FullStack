import logo  from "../assets/logo.svg"
import logout from "../assets/logout.svg"

export function Header(){
   return (
      <header className="w-full flex justify-between my-8">
         <img src={logo} alt="logo" />

         <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-200">Olá, Rachel</span>

            <img src={logout} alt="Logo de sair" className="cursor-pointer hover:opacity-70 transition ease-linear" />
         </div>
      </header>
   )
}