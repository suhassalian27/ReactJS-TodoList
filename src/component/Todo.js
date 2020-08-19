import React from 'react';

const Todo = (props) =>{
    return(
        <div className="todo-container">
        {props.todo} 
        <button className="button">Del</button>
        </div>
    )
}

export default Todo;