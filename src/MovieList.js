import React, { Component } from 'react'
import Movie from './Movie'
import movies from './1989.json'

class MovieList extends Component {
    render() {
        const baseURL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
        return (
            <section className="MovieList">
                <ul>
                    {movies.map((movie, index) => {
                        return <Movie title={movie.title} image={baseURL + movie.poster_path} plot={movie.overview} key={index} />
                    })}
                </ul>
            </section>
        )
    }
}

export default MovieList