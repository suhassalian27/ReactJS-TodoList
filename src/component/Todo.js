import React from "react";

const Todo = props => {
    return (
        <div className="todo-container">
            <span className="todo-text">{props.todo}</span>
            <button
                className="button"
                onClick={() => {
                    props.onDelete(props.id);
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default Todo;
