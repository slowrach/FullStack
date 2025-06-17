import { Merge } from "../utils/merge"

type Props = React.ComponentProps<"button"> & {
   loading?: boolean
   variant?: "base" | "icon"
}

const variants = {
   button: {
      base: "h-12",
      icon: "h-12 w-12",
   }
}

export function Button({ children, loading, className, type = "button", variant = "base", ...rest }: Props){
   return <button type={type} {...rest} disabled={loading} className={Merge(["flex items-center justify-center bg-green-100 text-white rounded-md h-12 cursor-pointer hover:bg-green-900 transition ease-linear disabled:opacity-70 disabled:cursor-not-allowed", variants.button[variant], className]) }>{children}</button>
}