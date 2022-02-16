import Icon from '@mdi/react'
import { mdiChevronLeft ,mdiChevronRight } from '@mdi/js';

export default function DateBar(props){

    return (

        <div className="flex flex-wrap place-content-between py-1 border-2 border-gray-400 rounded-md">
            <div className='flex items-center'>
                <button>
                    <Icon path={mdiChevronLeft} title="Arrow" size='2em' color="#0891b2" />
                </button>
            </div>
            <div className='flex items-center'>
                <span>{props.date}</span>
            </div>
            <div className='flex items-center'>
                <button>
                    <Icon path={mdiChevronRight} title="Arrow" size='2em' color="#0891b2" />
                </button>
            </div>
        </div>

    )
}