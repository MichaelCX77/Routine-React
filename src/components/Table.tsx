import ButtonSmall from './buttons/ButtonSmall'
import React from 'react';
import Tarefas from '../core/Tarefas'
                                     
function head(){
    return(
        <thead className="text-left text-cyan-800 bg-slate-100">
            <tr>
                <th className="pl-2 py-2">Horário</th>
                <th className="pl-2 py-2">Tarefa</th>
                <th className="pl-2 py-2">Descrição</th>
                <th className="pl-2 py-2">Ações</th>
            </tr>
        </thead>
    )
}

function editInForm(props,task){
    props.onClick()
    props.setTarefa(task)
}

function deleteOfListTasks(props,task){

    props.repo.excluir(task);
    props.repo.obterTarefas().then((tarefas) => {
        props.setListTasks(tarefas)
    } )
    
}

function getButtons(props,task){

    return (
        <React.Fragment>
            <ButtonSmall onClick={() => deleteOfListTasks(props,task)} class="p-1 rounded-md hover:bg-red-300" style="mdiDelete" color="#F5756C"/>
            <ButtonSmall onClick={() => editInForm(props,task)}class="p-1 rounded-md hover:bg-sky-500" style="mdiPencil" color="#1977D4"/>
        </React.Fragment>
    )
}

function getButtonAdd(addTask){

    return (
        <React.Fragment>
            <ButtonSmall onClick={() => addTask()} class="p-1 rounded-md opacity-0 hover:opacity-100 bg-green-200" style="mdiNotePlusOutline" color="rgb(45 212 191)" />
        </React.Fragment>
    )
}

function addTask(props,task){
    props.onClick()
    task.data = props.actualDate
    task.id = null
    props.setTarefa(task)
}

function getLine(props, task, style){

    const classe_td="pl-2 py-2"
    style = style ? "bg-white gray-100" : "bg-cyan-600 white"

    return (
        <tr key={task.id ? task.id : task.horario.horario} className={`${style} hover:bg-slate-200`}>
            <td className={classe_td}>{task.id == null ? task.horario.horario : task.horario}</td>
            <td className={classe_td}>{task.title}</td>
            <td className={classe_td}>{task.descricao}</td>
            <td className='flex flex-wrap place-content-evenly'>
                {task.id ? getButtons(props,task) : getButtonAdd(() => addTask(props,task)) }
            </td>
        </tr>
    )
}

function body(props){

    return (
        <tbody className="">
            {
                props.hours.map(hour => {

                    let hasTask = false
                    let actualTask = null

                    props.getListTasks().map((task) => {
                        if(task.data == props.actualDate){
                            if(task.horario == hour.horario){
                                actualTask = task
                                hasTask = true
                            } else {
                                hasTask = false
                            }
                        }
                    });

                    if(hasTask){
                        return getLine(props, actualTask, false)
                    } else {
                        return getLine(props, Tarefas.basicHour(hour), true)
                    }

                })
            }
        </tbody>
    )
}

export default function Table(props){
    return (
        <table className="w-auto border-2 border-gray-200">
            {head()}
            {body(props)}
        </table>
    )
}