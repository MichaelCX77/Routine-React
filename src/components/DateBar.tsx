import ButtonSmall from './buttons/ButtonSmall';
import React from 'react';



function getButton(style){
    return(
        <div className='flex items-center'>
            <ButtonSmall style={style} color="#0891b2"/>
        </div>
    )
}

function getDate(props){
    return(
        <div className='flex items-center'>
            <span>{props.date}</span>
        </div>
    )
}

export default function DateBar(props){
    return (
        <div className='mb-6'>
            <div className="flex flex-wrap place-content-between 
                            py-1 border-2 border-gray-400 rounded-md">
                
                {getButton("mdiChevronLeft")}
                {getDate(props)}
                {getButton("mdiChevronRight")}
            </div>
        </div>
    )
}