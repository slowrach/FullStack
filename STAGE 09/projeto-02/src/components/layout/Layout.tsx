import styles from "./layout.module.css"
import { Outlet } from "react-router"

export function Layout(){
   return (
      <div>
         <header className={styles.header}>Seja bem-vindo</header>

         <Outlet />

         <footer className={styles.footer}>Site desenvolvido por Rachel</footer>
      </div>
   )
}