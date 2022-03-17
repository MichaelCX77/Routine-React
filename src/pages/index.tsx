import { useEffect, useState } from 'react'
import Button from '../components/buttons/Button'
import NavBar from '../components/NavBar'
import Table from '../components/Table'
import DateBar from '../components/DateBar'
import Conteudo from '../components/Conteudo'
import Main from '../components/Main'
import Formulario from '../components/Formulario'
import { getActualDate } from '../uteis/TimeUtil'
import TarefasRepository from '../core/TarefasRepository'
import HorariosRepository from '../core/HorariosRepository'
import PeriodosRepository from '../core/PeriodosRepository'
import Tarefas from '../core/Tarefas'
import Horarios from '../core/Horarios'
import HorariosColecao from '../backend/db/HorariosColecao'
import PeriodosColecao from '../backend/db/PeriodosColecao'
import TarefasColecao from '../backend/db/TarefasColecao'
import Periodos from '../core/Periodos'



export default function Home(){

    const repo: TarefasRepository = new TarefasColecao();
    const hour: HorariosRepository = new HorariosColecao();
    const period: PeriodosRepository = new PeriodosColecao();

    const [visivel, setVisivel] = useState<"table" | "form">('table')
    const [actualDate, setActualDate] = useState(getActualDate())
    const [tarefas, setListTarefas] = useState<Tarefas[]>([])
    const [tarefa, setTarefa] = useState<Tarefas>(Tarefas.vazio())
    const [hours, setHours] = useState<Horarios[]>([])
    const [periods, setPeriods] = useState<Periodos[]>([])

    let isTable = visivel === "table" ? true : false

    useEffect(() => {

        repo.obterTarefas().then(setListTarefas)
        hour.obterHorarios().then(setHours)
        period.obterPeriodos().then(setPeriods)

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
                                <DateBar repo={repo}
                                         date={actualDate}
                                         setActualDate={setActualDate}
                                />
                                <Table
                                    getListTasks={() => tarefas} 
                                    setListTasks={setListTarefas}
                                    actualDate={actualDate}
                                    onClick={() => setVisivel('form')}
                                    repo={repo}
                                    hours={hours}
                                    setTarefa={setTarefa}
                                />
                            </>
                        ) : (
                            <Formulario 
                                setTableVisible={() => setVisivel('table')}
                                setListTasks={setListTarefas}
                                task={tarefa}
                                repo={repo}
                                hours={hours}
                                periods={periods}
                            />
                        )}
                    </Conteudo>
            </Main>
        </div>
    )
}