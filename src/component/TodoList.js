import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    const todo = props.todos.map((todo, i) => {
        return <Todo todo={todo} onDelete={props.onDelete} key="i" />;
    });

    let text;
    if (todo.length === 0) {
        text = <h1>You dont have any task. Add task below.</h1>;
    } else {
        text = <h1>{todo}</h1>;
    }
    return (
        <div className="todolist-container">
            {text}
            <hr />
        </div>
    );
};

export default TodoList;
