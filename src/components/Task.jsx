import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
    return (
        <div onDoubleClick={_=> props.toggle(props.id)} className={props.remind ? 'task reminder' : 'task'}>
            <h3 >
                {props.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={ _=> props.onDelete(props.id)}
                />
            </h3>
            <p>{props.day}</p>
        </div>

    )
}

export default Task