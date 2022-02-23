
export default function CheckPerson(props){

    return(
        <label className={`check ${props.classe}`}>
            <input checked={props.isChecked} type="checkbox" className="check-color" onClick={
                (e) => (props.onClick(e.currentTarget.checked))}>
            </input>
            <span style={{"border": "3px solid "+`${props.color}`}}></span>
        </label>
    )

}