import { useState } from 'react'
import './App.css'
import Todolist from './Todolist'
import Input from './Input'

function App() {
  const [tasks, setTasks] = useState<string[]>([])
  const [newtask, setNewTask] = useState<string>('')

  function change(event: React.ChangeEvent<HTMLInputElement>){
    setNewTask(event.target.value)
  }

  function add(){
    if (newtask.trim() !== ''){
      setTasks(t => [...t, newtask])
      setNewTask('')
    }
  }

  function handleEnter(event: React.KeyboardEvent<HTMLInputElement>){
    if(event.key === 'Enter'){
      add()
    }
  }

  function cancel(index: number){
    const updatedTasks = tasks.filter((_, i) => i != index)
    setTasks(updatedTasks)
  }

  function moveUp(index:number) {
    if (index > 0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}
  
  
  function moveDown(index:number){
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index+1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }


  return (
    <>
      <Input handleChange={change} handleClick={add} value={newtask} handleKeyClick={handleEnter} />
      <Todolist tasks={tasks} handleDelete={cancel} handleMoveUp={moveUp} handleMoveDown={moveDown} />
    </>
  )
}

export default App
