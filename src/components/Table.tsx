import ButtonSmall from './buttons/ButtonSmall'
import { generateHours } from "../uteis/timeUtil"
import React from 'react';
                                     
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

function getButtons(){

    return (
        <React.Fragment>
            <ButtonSmall class="p-1 rounded-md hover:bg-red-300" style="mdiDelete" color="#F5756C"/>
            <ButtonSmall class="p-1 rounded-md hover:bg-sky-500" style="mdiPencil" color="#1977D4"/>
        </React.Fragment>
    )
}

function getLine(task){

    const classe_td="pl-2 py-2"
    const style = (task.id % 2 == 0) ? "bg-cyan-200 gray-600" : "bg-cyan-600 white"

    return (

        <tr key={task.getId} className={`${style} hover:bg-slate-200`}>
            <td className={classe_td}>{task.horario}</td>
            <td className={classe_td}>{task.title}</td>
            <td className={classe_td}>{task.descricao}</td>
            <td className='flex flex-wrap place-content-evenly'>
                {getButtons()}
            </td>
        </tr>
    )
}

function body(props){

    return (
        <tbody className="">
            
            {props.getListTasks().map((task) => {
                return (task.data == props.actualDate) ? (getLine(task)) : ""
            })}

        </tbody>
    )
}

export default function Table(props){
    return (
        <table className="w-auto border-2 border-gray-200">{head()} {body(props)}</table>
    )
}