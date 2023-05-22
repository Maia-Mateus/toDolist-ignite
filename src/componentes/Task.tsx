import { ITask } from '../App'
import styles from './Task.module.css'
import {TbTrash} from 'react-icons/tb'
import { BsFillCheckCircleFill} from 'react-icons/bs'
export interface props{
    task: ITask,
    onDelete: (taskId: string) => void,
    onComplete: (taskId: string) => void
}

export function Task ({task, onDelete, onComplete}:props){
    const isCompleted = true;

    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete}>
                {isCompleted ? <BsFillCheckCircleFill/> : <div/>}
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