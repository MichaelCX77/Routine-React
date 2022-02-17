import ButtonSmall from './buttons/ButtonSmall';
import React from 'react';

function setButtons(props){

    return(
        <React.Fragment>
            <div className='flex items-center'>
                <ButtonSmall style="mdiChevronLeft" color="#0891b2"/>
            </div>
            <div className='flex items-center'>
                <span>{props.date}</span>
            </div>
            <div className='flex items-center'>
                <ButtonSmall style="mdiChevronRight" color="#0891b2"/>
            </div>
        </React.Fragment>
    )
}

export default function DateBar(props){
    return (
        <div className='mb-6'>
            <div className="flex flex-wrap place-content-between 
                            py-1 border-2 border-gray-400 rounded-md">
                    {setButtons(props)}
            </div>
        </div>
    )
}