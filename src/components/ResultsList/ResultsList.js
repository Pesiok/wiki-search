import React from 'react';
import ResultsListItem from '../ResultsListItem/ResultsListItem';
import './ResultsList.css';

const ResultsList = props => {
    const resultsListItems = props.results.map(result => {
        const extract = result.extract.substring(0, 100) + '...';
        return (
            <ResultsListItem 
                key={result.pageid}
                link={`https://en.wikipedia.org/?curid=${result.pageid}`}
                title={result.title}
                extract={extract}
            />
        );
    });

    return (
        <ul className={'results-list'}>
            {resultsListItems}
        </ul>
    );
}

export default ResultsList;