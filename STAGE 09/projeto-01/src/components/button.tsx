type Props = React.ComponentProps<"button"> & {
   name: string
}

export function Button(props: Props){
   return <button onClick={props.onClick}>
      {props.name}
   </button>
}