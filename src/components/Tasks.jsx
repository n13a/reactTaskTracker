import Task from './Task'

const Tasks = (props) => {
    return (
        <>
            {props.tasks.map(task => 
                <Task 
                    onDelete={props.onDelete}
                    className="task"
                    id={task.id}
                    key={task.id}
                    text={task.text}
                    day={task.day}
                />
            )}
        </>
    )
}

export default Tasks