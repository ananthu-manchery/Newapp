import React from 'react'
import { useState } from 'react'

export default function Todolist() {
    const [task,setTask]=useState([]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event){
      setNewTask(event.target.value)
      
     

    }

    function addTask(){
      if(newTask.trim() !== ""){
        setTask(t =>[...t,newTask]);
        setNewTask('')
      }

    }
    function moveUp(index){
      if(index>0){
        const updatedTasks=[...task];
        [updatedTasks[index],updatedTasks[index-1]]=
        [updatedTasks[index-1],updatedTasks[index]];
        setTask(updatedTasks);
      }

    }
    function moveDown(index){
      if(index<task.length-1){
        const updatedTasks=[...task];
        [updatedTasks[index],updatedTasks[index+1]]=
        [updatedTasks[index+1],updatedTasks[index]];
        setTask(updatedTasks);
      }

    }

    function deleteTask(index){
      const updatedTasks=task.filter((_,i)=>i !== index);
      setTask(updatedTasks);

    }
  return (
    <div className='todo-list'>
        <h1 className='head4'>To-do-list</h1>
        <div className='todo-inp'>
            <input className='inpu1' type="text" placeholder='Enter tasks...' value={newTask}  onChange={handleInputChange}/>
            <button className='add-btn' onClick={addTask}>Add</button>
        </div>
        <ol>
            {task.map((task,index) =>
            <li className='li-result' key={index}>
              <span className='result1'>{task}</span>
              <button className="btn6" onClick={()=>deleteTask(index)}>delete</button>
              <button className="btn6"  onClick={()=>moveUp(index)}>up</button>
              <button className="btn6"  onClick={()=>moveDown(index)}>Down</button>
            </li>
            )}
        </ol>
      
    </div>
  )
}
