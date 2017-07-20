import React from 'react';
import ResultsListItem from '../ResultsListItem/ResultsListItem';

const ResultsList = props => {
    const resultsListItems = props.results.map(result => {
        return (
            <ResultsListItem 
                key={result.pageid}
                link={`https://en.wikipedia.org/?curid=${result.pageid}`}
                title={result.title}
                extract={result.extract}
            />
        );
    });

    return (
        <ul>
            {resultsListItems}
        </ul>
    );
}

export default ResultsList;