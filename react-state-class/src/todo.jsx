import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function ToDo(){
    let[todos,settodo]=useState([{task:"sample task",id:uuidv4(),isDone:false}])
    let [newtodo,setnewTodo]=useState("")
    let addtask=()=>{
        settodo((prevTodos)=>{
            return [...prevTodos,{task:newtodo,id:uuidv4(),isDone:false}]
        })
        setnewTodo("")
    }

    let updatetodo = (event)=>{
        setnewTodo(event.target.value);
        
    }

    let deleteTodo=(id)=>{
         settodo((prevTodos)=> todos.filter((prevTodos)=>prevTodos.id != id))
    }

    let updateAll=()=>{
        settodo(todos.map((todo)=>{
            return{
                ...todo,
                task:todo.task.toUpperCase(),
            }
        }))
    }

    let markAsDone=(id)=>{
        settodo(todos.map((todo)=>{
            if(todo.id==id){
            return{
                ...todo,
                isDone:!todo.isDone,
            }
        }else{
            return todo;
        }
        }))
    }

    

    let styles={textDecorationLine:"line-through"}

    return(
        <>
        <h1>To-Do list</h1>
        <hr />
        <input  placeholder="write task" value={newtodo} onChange={updatetodo}/>
        <button onClick={addtask}>Add item</button>
        <ul>
          {
            todos.map((todo)=>(
                
                <li key={todo.id}><span style={todo.isDone?{textDecorationLine:"line-through"}:{}} >{todo.task} </span>
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                <input type="Checkbox" onClick={()=>markAsDone(todo.id)} ></input>
                </li>
               
            ))
          }
        </ul>
        <button onClick={updateAll}>upper case</button>
        </>
    )
}