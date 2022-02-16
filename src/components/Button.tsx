
export default function Button(props){
    return (
        <div>
            <button className={`
                w-20 
                ${props.color} ?? bg-${props.color} : bg-teal-400 
                rounded-md 
                py-2 
                px-2 
                hover:bg-teal-300
                `} >

                {props.text}
            </button>
        </div>
    )
}