import React, { Component } from 'react'
import Movie from './Movie'
import movies from './1989.json'

class MovieList extends Component {
    render() {
        // let new_release_date = movies.results.release_date.split('-').join()
        // new_release_date = parseInt(new_release_date)
        // console.log(new_release_date)
        return (
            <section>
                <ul className="movie-list">
                    {movies.results.map((movie, index) => {
                        return <Movie 
                        title={movie.title} 
                        image={movie.poster_path} 
                        plot={movie.overview} 
                        releaseDate={movie.release_date} 
                        key={index}/>
                    })}
                </ul>
            </section>
        )
    }
}

export default MovieList