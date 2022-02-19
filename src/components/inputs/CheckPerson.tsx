
export default function CheckPerson(props){

    return(
        <label className={`check ${props.classe}`}>
            <input type="checkbox" className="check-color"></input>
            <span style={{"border": "3px solid "+`${props.color}`}}></span>
        </label>
    )

}