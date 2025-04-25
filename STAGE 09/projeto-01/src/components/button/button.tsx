import style from "./button.module.css"

type Props = React.ComponentProps<"button"> & {
   name: string
}

export function Button(props: Props){
   return <button className={style.container} onClick={props.onClick}>
      <span>{props.name}</span>
   </button>
}