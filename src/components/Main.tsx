
export default function Main(props){

    return(
        <div className='w-full  pl-36 mt-4'>
            <h1 className='text-4xl mb-5'>{props.title}</h1>
            {props.children}
         </div>
    )
}