import React, { Component } from 'react';
import './ResultsListItem.css';

class ResultsListItem  extends Component {
    constructor(props) {
        super(props);

        this.state = {class: 'card'};
    }

    componentDidMount() {
        const active = 'card card--active';
        this.setState({class: active});
        setTimeout(() => {
            this.setState({class: `${active} card--show`})
        }, this.props.delay);
    }

    render() {
        return (
            <a className={this.state.class} href={this.props.link}>
                <li className={'results-list-item'}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.extract}</p>
                </li>
            </a>
        );
    }
}

export default ResultsListItem;