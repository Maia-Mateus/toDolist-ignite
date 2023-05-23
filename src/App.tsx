import { Header } from './componentes/Header.tsx'
import { Tasks } from './componentes/Tasks.tsx'
import {useState, useEffect} from 'react'
import './styles/global.css'

const LOCAL_STORAGE_KEY = "todo:saved-tasks"

export interface ITask{
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const[tasks, setTasks] = useState<ITask[]>([])

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(saved){
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks()
  },[])

  function setTasksAndSave(newTasks: ITask[]){ //pra quando der f5 na página, as tasks não sumirem.
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))//stringfy pq o segundo paramentro é string)
  }

  function addTask(taskTitle:string){
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById(taskId:string){
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasksAndSave(newTasks)
  }

  function toggleTaskCompletedById(taskId:string){  //quando clica no botao, se o id for igual, muda o isCompleted !
    const newTasks = tasks.map((task) => {
      if(task.id == taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  )
}

