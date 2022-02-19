
export default function Button(props){

    const classe = props.classe
    const color = props.color ?? 'bg-teal-400' 
    const hover = props.hover ?? 'hover:bg-teal-300'
    const width = props.width ?? 'w-20'

    const stringClass = color + " " + hover + " " + width

    return (
        <div>
            <button className={`
                ${stringClass} rounded-md py-2 px-2 ${classe}`} >
                {props.text}
            </button>
        </div>
    )
}