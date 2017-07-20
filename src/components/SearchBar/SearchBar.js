import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
    }

    onChangeHandler(event) {
        const value = event.target.value;
        this.setState({value});
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.value);
    }

    render() {
        return (
            <form onSubmit={event => this.onSubmitHandler(event)}>
                <input value={this.state.value} onChange={event => this.onChangeHandler(event)}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default SearchBar;