import "./Todo1.css"

import React, { useState } from 'react';
function Todo1(){
   const [task, setTask] = useState("");
   const [myArray, setMyArray] = useState(["Do Home Work"]);
   const [complte, setComplte] = useState(false);
    function handleAddtask(e){
         setTask(e.target.value);
    };
  function addTask(e){
    e.preventDefault();
    const newArray = [...myArray];
    newArray.push(task);
    setMyArray(newArray);
    console.log(myArray);
  }

  function handleDelete(index) {
        const newArray = [...myArray];
        newArray.splice(index, 1);
        setMyArray(newArray);
  };
  function handleComplete(index) {
        const newAray=[...myArray]
        if(myArray[index].includes("✅")){
        }
        else{
        newAray[index]=myArray[index]+" ✅";
        setMyArray(newAray);
        setComplte(!complte)
        }
        
  };

    return(
        <>
            <h1>ToDoList</h1>
            <form onSubmit={addTask}>
            <label htmlFor="">Enter Task :- <input onChange={handleAddtask}  value={task} type="text" /> </label>
            <button type='submit' >Add Task</button>
            </form>
            <div className='mainContainer' >
                <ul>
                    {
                       myArray.map((fruit, index)=>(
                        <div className="divv">
                        <li key={index} id={index}>{fruit}</li>
                        <button onClick={() => handleDelete(index)}  >Delete</button> 
                        <button onClick={() =>handleComplete(index)} >  { myArray[index].includes("✅")?"Completed":"Marks As Complete" } </button>
                        <br></br>
                        </div>
                       ))
                    }
                    
                </ul>
            </div>

        </>
    );
}
export default Todo1;