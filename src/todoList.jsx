import React,{useState} from "react";
function TodoList(){
    const[tasks,settasks] = useState([]);
    const [newtask,setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newtask.trim() === "") return;
        settasks(t=>[...t,newtask])
        setNewTask("");

    }

    function deleteTask(index){
        settasks(tasks => tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedtasks = [...tasks];
            [updatedtasks[index],updatedtasks[index-1]] = [updatedtasks[index-1],updatedtasks[index]];
            settasks(updatedtasks);
        }
        
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedtasks = [...tasks];
            [updatedtasks[index],updatedtasks[index+1]] = [updatedtasks[index+1],updatedtasks[index]];
            settasks(updatedtasks);
        }

    }

return(
    <>
        <div className="todoList" style={{
            maxWidth: '600px',
            margin: '50px auto',
            padding: '20px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            borderRadius: '10px'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#333',
                marginBottom: '20px'
            }}>Todo List</h1>

            <div style={{
                display: 'flex',
                marginBottom: '20px',
                gap: '10px'
            }}>
                <input 
                    type="text" 
                    placeholder="Enter a task" 
                    value={newtask} 
                    onChange={handleInputChange}
                    style={{
                        flex: '1',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ddd'
                    }}
                />
                <button 
                    className="add-button" 
                    onClick={addTask}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >Add Task</button>
            </div>

            <ul style={{
                listStyle: 'none',
                padding: '0'
            }}>
                {tasks.map((task,index)=>
                    <li key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px',
                        marginBottom: '10px',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '5px',
                        gap: '10px'
                    }}>
                        <span className="text" style={{flex: '1'}}>{task}</span>
                        <button 
                            className="delete-button" 
                            onClick={() => deleteTask(index)}
                            style={{
                                padding: '5px 10px',
                                backgroundColor: '#ff4444',
                                color: 'white',
                                border: 'none',
                                borderRadius: '3px',
                                cursor: 'pointer'
                            }}
                        >Delete</button>
                        <button 
                            className="move-up-button" 
                            onClick={() => moveTaskUp(index)}
                            style={{
                                padding: '5px 10px',
                                backgroundColor: '#2196F3',
                                color: 'white',
                                border: 'none',
                                borderRadius: '3px',
                                cursor: 'pointer'
                            }}
                        >Move Up</button>
                        <button 
                            className="move-down-button" 
                            onClick={() => moveTaskDown(index)}
                            style={{
                                padding: '5px 10px',
                                backgroundColor: '#2196F3',
                                color: 'white',
                                border: 'none',
                                borderRadius: '3px',
                                cursor: 'pointer'
                            }}
                        >Move Down</button>
                    </li>
                )}
            </ul>
        </div>
    </>
)
}

export default TodoList;