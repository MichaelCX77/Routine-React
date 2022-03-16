
export default function Select(props){

    return (
        
        <div className="">
            <select disabled={props.isEnabled} className={`${props.class} 
                    bg-slate-300 rounded-md border-2 
                    border-gray-500 px-2 py-1.5 outline-0 m-4`}
                    onChange={(e) => props.onChange(e.target.options[e.target.selectedIndex].text)}>
                {
                    props.getValues().map((attr) => {

                        const isSelected = (props.selectedValue == attr.id) ? true : false

                        return <option value={attr.id} selected={isSelected}>
                                    {attr.text}
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
