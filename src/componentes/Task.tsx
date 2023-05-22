import { ITask } from '../App'
import styles from './Task.module.css'
import {TbTrash} from 'react-icons/tb'

export interface props{
    task: ITask,
    onDelete: (taskId: string) => void
}

export function Task ({task, onDelete}:props){
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div/>
            </button>

            <p>
                {task.title}
            </p>

            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <TbTrash size={20}/>
            </button>
        </div>  
    )
}