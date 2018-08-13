import React, { Component } from 'react';
import MovieList from './MovieList'

class App extends Component {
  render() {
    const title = '1989 Movies'
    return (
      <div>
        <header>
          <h1>{title}</h1>
          <MovieList />
        </header>
      </div>
    );
  }
}

export default App;
