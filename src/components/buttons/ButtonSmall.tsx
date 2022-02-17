import Icon from "@mdi/react";
import * as Mid from '@mdi/js';

export default function ButtonSmall(props) {
    const classe = props.class ?? 'rounded-md hover:bg-sky-300'
    
    return (
        <button className={classe}>
            <Icon path={Mid[props.style]} title="Arrow" size='2em' color={props.color} />
        </button>
    )
    
}