import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function App() {
  let [todolist,setTodolist]=useState([]);


  let saveToDo=(event)=>{
    event.preventDefault();
    let todoname=event.target.todoname.value;
    if(!todolist.includes(todoname)){
      let temp=[...todolist,todoname];
      setTodolist(temp);
      NotificationManager.success("Successfully Saved.")
    }
    else{
      NotificationManager.error("Already Added!");
    }
  };
  let list= todolist.map((item,i)=>{
    return <TodoItem value={item} key={i} indexno={i} todolist={todolist} setTodolist={setTodolist} />
  })
  return (
    <div className="App">
      <NotificationContainer />
      <h1>Todo List</h1>
      <form onSubmit={saveToDo}> 
        <input type='text' name='todoname' placeholder='Enter ToDo reminder'/> <button>Save</button>
      </form>
      <div className='tododiv'>
      <ul>
        {list}
      </ul>
      </div>
    </div>
  );
}
 function TodoItem({value,indexno,todolist,setTodolist}){

  let [status,setStatus]=useState(false);
  let checkStatus=()=>{
    return setStatus(!status);
  }
    let deleteitem=()=>{
      let finallist=todolist.filter((item,i)=>i!=indexno);
      setTodolist(finallist);
    }
    return(
      <li onClick={checkStatus} className={(status)?'completed':''}> {indexno+1} {value} <span onClick={deleteitem}>&times;</span></li>);
 }


export default App;
