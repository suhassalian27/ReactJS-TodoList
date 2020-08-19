import React from "react";

const Header = props => {
    return (
        <div>
            <div className="card-header">
                <h1 className="card-header-title">
                    You have {props.numOfTodos} Todos.
                </h1>
            </div>
            <hr />
        </div>
    );
};

export default Header;
