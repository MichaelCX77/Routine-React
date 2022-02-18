
export default function Button(props){

    const classe = props.classe

    return (
        <div>
            <button className={`
                w-20 bg-teal-400 rounded-md py-2 px-2 hover:bg-teal-300 ${props.classe}`} >
                {props.text}
            </button>
        </div>
    )
}