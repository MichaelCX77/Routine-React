import Button from '../components/buttons/Button'
import NavBar from '../components/NavBar'
import Table from '../components/Table'
import DateBar from '../components/DateBar'
import Conteudo from '../components/Conteudo'
import Main from '../components/Main'
import Formulario from '../components/Formulario'
import { useState } from 'react'

export default function Home(){

    const [visivel, setVisivel] = useState<"table" | "form">('table')

    let isTable = visivel === "table" ? true : false

    return (
        <div className='w-full'>
            <NavBar title="Routine React"/>
            {isTable ? (
                    <div className='flex justify-end mx-6 my-4'>
                        <Button text="Planejar" onClick={() => setVisivel('form')}/>   
                    </div>
            ) : ""}
            <Main title={isTable ? ("Minha Rotina") : ("Planejamento")}>
                    <Conteudo>
                    {isTable ? (
                        <>
                            <DateBar date="14 de Fevereiro - 2022"/>
                            <Table />
                        </>
                    ) : (
                        <Formulario setTableVisible={() => setVisivel('table')}/>
                    )}
                    </Conteudo>
            </Main>
        </div>
    )
}