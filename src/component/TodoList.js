import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    const todo = props.todos.map((todo, i) => {
        return <Todo todo={todo} onDelete={props.onDelete} key="i" />;
    });

    let text;
    if (todo.length === 0) {
        text = <h1>You dont have any task. Add task.</h1>;
    } else {
        text = <span>{todo}</span>;
    }
    return (
        <div className="todolist-container">
            {text}
            <hr />
        </div>
    );
};

export default TodoList;
