import { ChangeEvent, FormEvent} from 'react'
import { useState } from 'react'
import todoLogo from '../assets/toDoLogo.svg'
import styles from './Header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'

interface Props{
    onAddTask: (taskTitle: string) => void
}

export function Header ({onAddTask}:Props){
    const[title, setTitle] = useState('')

    function handleSubmit(event:FormEvent){
        event.preventDefault()

        onAddTask(title)
        setTitle('')//depois de dar enter, limpa o input
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value)
    }//consegue definir o valor de title no onChange dele

    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="" />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    onChange={onChangeTitle}
                    value={title}
                 />

                 <button>
                    Criar
                   <AiOutlinePlusCircle size={20}/>
                 </button>
            </form>
        </header>
    )
}