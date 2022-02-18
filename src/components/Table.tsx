import ButtonSmall from './buttons/ButtonSmall'

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

function getLine(bg,color){

    const classe_td="pl-2 py-2"

    return (

        <tr className={`${bg} text-${color}  hover:bg-slate-200`}>
            <td className={classe_td}>09:00</td>
            <td className={classe_td}>Buscar Yohan na creche</td>
            <td className={classe_td}>Buscar Yohan na creche</td>
            <td className='flex flex-wrap place-content-evenly'>
                {getButtons()}
            </td>
        </tr>
    )
}

function body(){

    return (
        <tbody className="">
            {getLine("bg-cyan-200","gray-600")}
            {getLine("bg-cyan-600","white")}
            {getLine("bg-cyan-200","gray-600")}
            {getLine("bg-cyan-600","white")}
        </tbody>
    )
}

export default function Table(){
    return (
        <table className="w-auto border-2 border-gray-200">{head()} {body()}</table>
    )
}