import Button from '../components/buttons/Button'
import NavBar from '../components/NavBar'
import Table from '../components/Table'
import DateBar from '../components/DateBar'
import Conteudo from '../components/Conteudo'
import Main from '../components/Main'
import Formulario from '../components/Formulario'
import { useState } from 'react'
import { getListTasks, deleteTask, saveTask } from '../service/TarefasService'
import { getActualDate } from '../uteis/timeUtil'
import Tarefas from '../core/tarefas'

export default function Home(){

    const [visivel, setVisivel] = useState<"table" | "form">('table')
    const [actualDate, setActualDate] = useState(getActualDate())
    const [tarefa, setTarefa] = useState<Tarefas>(Tarefas.vazio())

    let isTable = visivel === "table" ? true : false

    
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
                                    getListTasks={() => getListTasks()} 
                                    actualDate={actualDate} 
                                    onClick={() => setVisivel('form')}
                                    deleteTask={deleteTask}
                                    setTarefa={setTarefa}

                                />
                            </>
                        ) : (
                            <Formulario 
                                setTableVisible={() => setVisivel('table')}
                                task={tarefa}
                                saveTask={saveTask}
                            />
                        )}
                    </Conteudo>
            </Main>
        </div>
    )
}