
export default function Button(props){

    const color = props.color ?? 'teal'

    return (
        <div>
            <button className={`
                w-20 bg-${color}-400 rounded-md py-2 px-2 hover:bg-${color}-300`} >
                {props.text}
            </button>
        </div>
    )
}