import React, { Component } from 'react';
import './SearchBar.css';

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
        const id='searchBar';
        const label = 'Search on wiki'

        return (
            <div className={'search-bar'}>
                <form onSubmit={event => this.onSubmitHandler(event)}>
                    <label 
                        htmlFor={id}
                        className={'visually-hidden'}
                    >
                        {label}
                    </label>
                    <button type="submit">
                        <span className={'material-icons'}>search</span>
                    </button>
                    <input 
                        id={id}
                        value={this.state.value}
                        placeholder={label} 
                        onChange={event => this.onChangeHandler(event)}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;