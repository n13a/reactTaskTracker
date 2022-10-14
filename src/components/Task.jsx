import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
  return (
    <div className="task">
        <h3>
            {props.text}
            <FaTimes style={{color: 'red', cursor: 'pointer'}}/>
        </h3>
        <p>{props.day}</p>
    </div>

  )
}

export default Task