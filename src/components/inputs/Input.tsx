
export default function Input(props){

    const width = props.width ?? 'w-2/4'
    const back = props.bg ?? 'bg-slate-300'

    let value = props.value

    if(props.type == "date"){
        value = value?.split('/').reverse().join('-');
    }

    return (
        <div className="">
            <input  disabled={props.isEnabled} id={props.id} type={props.type} className={`
                    bg-${back} rounded-md border-2 
                    border-gray-500 px-2 py-1 ${width} outline-0
                    m-4`}
                    placeholder={props.placeholder}
                    value={value}>
            </input>
        </div>
    )
}