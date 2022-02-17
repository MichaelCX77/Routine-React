
export default function Main(props){

    return(
        <div className='w-full  pl-36 mt-6'>
            <h1 className='text-4xl mb-10'>{props.title}</h1>
            {props.children}
         </div>
    )
}