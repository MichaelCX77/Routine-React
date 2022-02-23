
export default function Select(props){

    return (
        
        <div className="">
            <select disabled={props.isEnabled} className={`${props.class} 
                    bg-slate-300 rounded-md border-2 
                    border-gray-500 px-2 py-1.5 outline-0 m-4`}
                    onChange={(e) => props.onChange(e.target.value)}>
                {
                    props.arrayOptions.map((text, value) => {

                        const isSelected = (props.selectedValue == value) ? true : false

                        return <option value={value} selected={isSelected}>
                                    {text}
                               </option>    
                    })
                }
            </select>

        </div>
    )

}
function body(props){

    let style = false;

    return (
        <tbody className="">
            {props.getListTasks().map((task) => {

                if(task.data == props.actualDate){
                    style = (style == true) ? false : true
                } else {
                    return ""
                }
            })}
        </tbody>
    )
}
