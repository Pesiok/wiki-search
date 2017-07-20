import React, { Component } from 'react';
import SearchBar from './../SearchBar/SearchBar';
import ResultsList from './../ResultsList/ResultsList';
import jsonp from './../utilis/jsonp';
// import logo from './logo.svg';
import './App.css';

const URI = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Main+Page&generator=search&exlimit=max&exintro=1&gsrnamespace=0&gsrlimit=10&gsrsearch=';

class App extends Component {
  constructor() {
    super();

    this.state = {results: []};
  }

  _parseInfo(data) {
    const obj = data.query.pages;
    let results = [];

    for (let prop in obj) {
      results.push(obj[prop]);
    }

    this.setState({results});
  }

  fetchInfo(term) {
    jsonp(URI + term)
      .then(response => response.json())
      .then(data => this._parseInfo(data))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={(term) => this.fetchInfo(term)}/>
        <ResultsList results={this.state.results}/>  
      </div>
    );
  }
}

export default App;