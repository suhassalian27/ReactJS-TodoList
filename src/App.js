import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import InputForm from "./component/InputForm";

class App extends Component {
    state = {
        tasks: ["Task First", "Second Tasks", "Third Tasks"]
    };

    handleDelete = index => {
        const newArr = [...this.state.tasks];
        newArr.splice(index, 1);
        this.setState({ tasks: newArr });
    };
    handleSubmit = task => {
        this.setState({ tasks: [...this.state.tasks, task] });
    };

    render() {
        return (
            <div className="outer-container">
                <Header numOfTodos={this.state.tasks.length} />
                <TodoList
                    todos={this.state.tasks}
                    onDelete={this.handleDelete}
                />
                <InputForm onFormSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;
