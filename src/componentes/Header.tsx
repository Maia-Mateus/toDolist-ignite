import todoLogo from '../assets/toDoLogo.svg'
import styles from './Header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
export function Header (){
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="" />

            <form className={styles.newTaskForm}>
                <input 
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                 />

                 <button>
                    Criar
                   <AiOutlinePlusCircle size={20}/>
                 </button>
            </form>
        </header>
    )
}