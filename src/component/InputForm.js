import React, { Component } from "react";

class InputForm extends Component {
    state = { term: "" };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.term === "") return;
        this.props.onFormSubmit(this.state.term);
        this.setState({ term: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="input-container">
                <input
                    type="text"
                    className="input"
                    placeholder="Add task"
                    onChange={e => this.setState({ term: e.target.value })}
                ></input>
                <button className="submit-button">Submit</button>
                <button className="clear-button" type="reset">Clear</button>
            </form>
        );
    }
}

export default InputForm;
