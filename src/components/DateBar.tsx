import ButtonSmall from './buttons/ButtonSmall';
import React from 'react';
import { getNewData } from "../uteis/TimeUtil"



function getButton(style, onClick){
    return(
        <div className='flex items-center'>
            <ButtonSmall onClick={() => onClick()} style={style} color="#0891b2"/>
        </div>
    )
}

function getDate(props){
    return(
        <div className='flex items-center'>
            <span>{props.date.replace('/',' - ').replace('/',' - ')}</span>
        </div>
    )
}

export default function DateBar(props){

    return (
        <div className='mb-6'>
            <div className="flex flex-wrap place-content-between 
                            py-1 border-2 border-gray-400 rounded-md">
                
                {getButton("mdiChevronLeft", () => {
                    props.setActualDate(getNewData(props.date, true))
                })}
                {getDate(props)}
                {getButton("mdiChevronRight", () => {
                    props.setActualDate(getNewData(props.date, false))
                })}
            </div>
        </div>
    )
}