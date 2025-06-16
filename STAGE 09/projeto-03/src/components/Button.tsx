type Props = React.ComponentProps<"button"> & {
   loading?: boolean
}

export function Button({ children, loading, type = "button", ...rest }: Props){
   return <button type={type} {...rest} disabled={loading} className="flex items-center justify-center bg-green-100 text-white rounded-md h-12 cursor-pointer hover:bg-green-900 transition ease-linear disabled:opacity-70 disabled:cursor-not-allowed">{children}</button>
}