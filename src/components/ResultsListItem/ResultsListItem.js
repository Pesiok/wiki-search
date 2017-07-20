import React from 'react';

const ResultsListItem = props => {
    return (
        <li>
            <a href={props.link}>
                <h2>{props.title}</h2>
            </a>
            <div dangerouslySetInnerHTML={{__html: props.extract}} />
        </li>
    );
}

export default ResultsListItem;