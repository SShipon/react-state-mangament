import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";


const TodoForm = () => {
    const  { state, dispatch} = useContext(TodoContext)
    console.log(state)

    const [task, setTask] = useState('')

     const handelSubmit =(e: FormEvent)=>{
        e.preventDefault()
        const todo ={
            id:Math.random().toString(36).substring(2,7),
            title:task,
            isCompleted:false
        }
       dispatch({type: "addTodo", payload:todo})
     }

    return (
        <div>
            <h1>Add Todo</h1>
            <form onSubmit={handelSubmit}>
              <label htmlFor="Todo">Task</label>  
              <input className="border border-purple-700 " type="text" name="todo" id="todo" onBlur={(e)=>setTask(e.target.value)}/>
              <button className="btn btn-secondary" type="submit"> Submit</button>      
            </form>
        </div>
    );
};

export default TodoForm;