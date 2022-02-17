

export default function Conteudo(props){

    return (
        <div className='flex flex-col w-7/12 max-h-80'>
            {props.children}
        </div>
    )
}