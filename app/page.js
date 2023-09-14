"use client"
import React, { useState } from 'react'

const page = () => {
  const[tittle,settittle]=useState("");
  const[dis,setdis]=useState("");
  const[status,setstatus]=useState("pending");
  const[task,settask]=useState([]);
  const[activetask,setactivetask]=useState(null);
  // setInterval(()=>{
  //   settime(new Date().toLocaleTimeString());
  // },1000)
  const sub=(event)=>{
    event.preventDefault();
    // settittle(event.target.tittle.value);
    // setdis(event.target.dis.value);
    // setstatus(event.target.status.value);
    const newTask={
      Date:new Date().toDateString(),
    tittle,
    dis,
    status
    }
    // console.log(tittle,status,dis);
    // task.push(newTask);
    settask([...task,newTask]);
    // console.log(task);
    settittle("");
    setdis("");
    setstatus("pending");
  };
 
  
  const DeleteHandler=(index)=>{
    settask(task.filter((t,i)=> i!==index));
  }
  const UpdateHandler=(index)=>{
      const {tittle,dis,status}=task[index];
      settittle(tittle);
      setdis(dis);
      setstatus(status);
      setactivetask(index);
  }
  const UpdateTask=(e)=>{
      e.preventDefault();
      const copytask=[...task];
      copytask[activetask]={...copytask[activetask],tittle,dis,status};
      settask(copytask);
      setactivetask(null);
      settittle("");
      setdis("");
      setstatus("pending");
  }
  var tasklist=<h2> Loading...</h2>;
  if(task.length > 0){
    tasklist=task.map((task,index)=>(
      <div key={index}>
        <br />
        {task.Date}
        {task.tittle}
        {task.dis}
        {task.status}
        <button onClick={() => DeleteHandler(index)}>Delete Task</button>
        <button onClick={() => UpdateHandler(index)}>Update Task</button>
        <br />
      </div>
    ))
  }
  // const change=
  // }
  return (
    <div>
      {/* <h1>{name}</h1> */}
      <form  >

        <input  onChange={(event)=>{settittle(event.target.value);}} value={tittle} type="text" name="tittle" placeholder='tittle'/>
        <textarea name="dis" cols="30" rows="10" onChange={(event)=>{setdis(event.target.value);}} value={dis}></textarea>
        <select name="status" 
        onChange={(event)=>{setstatus(event.target.value);}} 
        defaultValue={status}>
          <option value="due">Due</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        {activetask === null ? (<input type="submit" onClick={sub} value="CreateTask" />):(<input type="submit" onClick={UpdateTask} value="UpdateTask" />)}
      </form>
      {/* <h2>Tasks</h2>
      <div id="card">
        
      </div> */}
      {tasklist}
    </div>

  )
  
}


export default page