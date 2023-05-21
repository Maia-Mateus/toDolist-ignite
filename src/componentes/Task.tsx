import { ITask } from '../App'
import styles from './Task.module.css'
import {TbTrash} from 'react-icons/tb'

export interface props{
    task: ITask;
}

export function Task ({task}:props){
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div/>
            </button>

            <p>
                {task.title}
            </p>

            <button className={styles.deleteButton}>
                <TbTrash size={20}/>
            </button>
        </div>  
    )
}