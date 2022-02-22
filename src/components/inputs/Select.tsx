
export default function Select(props){

    return (
        
        <div className="">
            <select disabled={props.isEnabled} className={`${props.class} bg-slate-300 rounded-md border-2 
                    border-gray-500 px-2 py-1.5 outline-0 m-4`}>
                {
                    props.arrayOptions.map((val) => {
                        return <option value="">{val}</option>    
                    })
                }
            </select>

        </div>
    )
}