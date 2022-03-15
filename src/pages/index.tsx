import Button from '../components/buttons/Button'
import NavBar from '../components/NavBar'
import Table from '../components/Table'
import DateBar from '../components/DateBar'
import Conteudo from '../components/Conteudo'
import Main from '../components/Main'
import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import { getActualDate } from '../uteis/timeUtil'
import TarefasRepository from '../core/TarefasRepository'
import TarefasColecao from '../backend/db/TarefasColecao'
import Tarefas from '../core/tarefas'

export default function Home(){

    const repo: TarefasRepository = new TarefasColecao();

    const [visivel, setVisivel] = useState<"table" | "form">('table')
    const [actualDate, setActualDate] = useState(getActualDate())
    const [tarefas, setListTarefas] = useState<Tarefas[]>([])
    const [tarefa, setTarefa] = useState<Tarefas>(Tarefas.vazio())

    let isTable = visivel === "table" ? true : false

    useEffect(() => {

        repo.obterTarefas().then(setListTarefas)

    }, [])

    return (
        <div className='w-full'>
            <NavBar title="Routine React"/>
            {isTable ? (
                    <div className='flex justify-end mx-6 my-4'>
                        <Button text="Planejar" onClick={
                            () => {
                                setVisivel('form')
                                setTarefa(Tarefas.vazio())
                            } 
                        }/>   
                    </div>
            ) : ""}
            <Main title={isTable ? ("Minha Rotina") : ("Planejamento")}>
                    <Conteudo>
                        {isTable ? (
                            <>
                                <DateBar date={actualDate.replace('/',' - ').replace('/',' - ')}/>
                                <Table
                                    getListTasks={() => tarefas} 
                                    setListTasks={setListTarefas}
                                    actualDate={actualDate} 
                                    onClick={() => setVisivel('form')}
                                    repo={repo}
                                    setTarefa={setTarefa}
                                />
                            </>
                        ) : (
                            <Formulario 
                                setTableVisible={() => setVisivel('table')}
                                task={tarefa}
                                repo={repo}
                            />
                        )}
                    </Conteudo>
            </Main>
        </div>
    )
}