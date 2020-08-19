import React from "react";

const InputForm = props => {
    return (
        <div className="card-header">
            <h1 className="card-header-title">
                You have {props.numOfTodos} Todos.
            </h1>
        </div>
    );
};

export default InputForm;
