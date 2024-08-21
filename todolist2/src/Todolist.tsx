import './Todolist.css'
import { MdDelete } from "react-icons/md";
import { FaArrowAltCircleDown, FaArrowCircleUp } from "react-icons/fa";

interface TodolistProps{
    tasks: string[];
    handleDelete: (index: number)=>void;
    handleMoveUp: (index: number)=>void;
    handleMoveDown: (index: number)=>void;

}

export default function({handleDelete, handleMoveUp, handleMoveDown, tasks} :TodolistProps){
    return(
        <ul>
         { tasks.map(
            (task, index) => (
                <li key={index} className="list">
                    <span> 
                      {task}
                    </span>
                    <div className='buttons'>
                      <button onClick={()=>handleDelete(index)}><MdDelete /></button>
                      <button onClick={()=>handleMoveUp(index)}><FaArrowCircleUp /></button>
                      <button onClick={()=>handleMoveDown(index)}><FaArrowAltCircleDown /></button>
                    </div>
                    
                </li>

            )
          )}
        </ul>
    )
}

