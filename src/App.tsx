import { Header } from './componentes/Header.tsx'
import { Tasks } from './componentes/Tasks.tsx'
import {useState} from 'react'
import './styles/global.css'

export interface ITask{
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const[tasks, setTasks] = useState<ITask[]>([
    {
      id:"test",
      title:"test",
      isCompleted: true
    },
    {
      id:"tksakt",
      title:"test",
      isCompleted: false
    }
  ])

  function addTask(taskTitle:string){
    setTasks([
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
    setTasks(newTasks)
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
    setTasks(newTasks);
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

