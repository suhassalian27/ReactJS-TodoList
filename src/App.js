import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import InputForm from "./component/InputForm";

class App extends Component {
    render() {
        return (
            <div className="outer-container">
                <Header numOfTodos/>
                <TodoList />
                <InputForm />
            </div>
        );
    }
}

export default App;
