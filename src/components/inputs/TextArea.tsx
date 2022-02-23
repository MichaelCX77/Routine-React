
export default function TextArea(props){

    return (
        <div className="">
            <textarea className="
                    rounded-md border-2 
                    border-gray-500 px-2 py-1 ml-4 outline-0 resize-none" 
                    placeholder={props.placeholder}
                    cols={props.cols} rows={props.rows}
                    value={props.value}>
            </textarea>
        </div>
    )
}