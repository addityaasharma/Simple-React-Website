import React, { useState } from 'react'
import "./Indexw.css"

const Gadgets = () => {
    const [result,setResult] = useState("")
    const Value = (e) => {
        setResult((prev) => {
            const items = prev + e;
            if (items.length > 18) {
                setResult('')
            }
            return items;
        });
    };

// Toodo lists
    // To-Do List State
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
    const addTask = () => {
        if (input.trim() === "") return;
        setTasks([...tasks, input]);
        setInput("");
      };
    
      const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
      };
    
      const clearTasks = () => {
        setTasks([]);
      };
    
  return (
    <div>
        {/* Calculator  */}
      <div className="calculator">
        <h1>Calculator</h1>
        <div className="calc">
            <div className="display"><h1>{result}</h1></div>
            <div className="buttons">
                <button value={1} onClick={(e)=>Value(e.target.value)}>1</button>
                <button value={2} onClick={(e)=>Value(e.target.value)}>2</button>
                <button value={3} onClick={(e)=>Value(e.target.value)}>3</button>
                <button value={4} onClick={(e)=>Value(e.target.value)}>4</button>
                <button value={5} onClick={(e)=>Value(e.target.value)}>5</button>
                <button value={6} onClick={(e)=>Value(e.target.value)}>6</button>
                <button value={7} onClick={(e)=>Value(e.target.value)}>7</button>
                <button value={8} onClick={(e)=>Value(e.target.value)}>8</button>
                <button value={9} onClick={(e)=>Value(e.target.value)}>9</button>
                <button value={0} onClick={(e)=>Value(e.target.value)}>0</button>
                <button value={"+"} onClick={(e)=>Value(e.target.value)}>+</button>
                <button value={"="} onClick={()=>setResult(eval(result))}>=</button>
            </div>
        </div>
      </div>

      {/* Todo lists  */}
      <div className='todolist'>
      <div className="todo-container">
        <h1>To-Do List</h1>
        <div className="input-section">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task..."
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>❌</button>
            </li>
          ))}
        </ul>
        {tasks.length > 0 && <button className="clear-btn" onClick={clearTasks}>Clear All</button>}
      </div>
    </div>
    </div>
  )
}

export default Gadgets
