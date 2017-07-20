import React from 'react';
import './ResultsListItem.css';

const ResultsListItem = props => {
    return (
        <a className={'link'} href={props.link}>
            <li className={'results-list-item'}>
                <h2>{props.title}</h2>
                <p>{props.extract}</p>
            </li>
        </a>
    );
}

export default ResultsListItem;