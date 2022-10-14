import Task from './Task'

const Tasks = (props) => {

    return (
        <>
            {props.tasks.map(task => 
                <Task 
                    className="task"
                    key={task.id}
                    text={task.text}
                    day={task.day}
                />
            )}
        </>
    )
}

export default Tasks