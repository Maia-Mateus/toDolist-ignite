import { ITask } from '../App'
import { Task } from './Task'
import styles from './Tasks.module.css'

interface props{
    tasks: ITask[],
    onDelete: (taskId:string)=> void
}

export function Tasks ({tasks, onDelete}:props){
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className={styles.textPurple}> Concluidas</p>
                    <span>
                        {completedTasks} de {tasksQuantity}
                    </span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map((task)=> (
                    <Task key={task.id} task={task} onDelete={onDelete}/>    
                ))}
                
                
            </div>
        </section>
    )
}