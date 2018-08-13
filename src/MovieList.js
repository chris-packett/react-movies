import React, { Component } from 'react'
import Movie from './Movie'
import movies from './1989.json'

    // let new_release_date = movies.results[0].release_date.split('-').join('')
    // new_release_date = parseInt(new_release_date)
    // console.log(new_release_date)
    // sortedMovies = movies.results.map((movie) => {
    //     movieDateNumber = parseInt(movie.release_date.split('-').join(''))
    //     movieDateNumber.sort(sortByNumber)
    // })

class MovieList extends Component {
    render() {
        return (
            <section>
                <ul className="movie-list">
                    {movies.results.sort((a, b) => {
                        if (a.release_date > b.release_date){
                            return 1
                        } else if (a.release_date < b.release_date){
                            return -1
                        } else {
                            return 0
                        }
                    }).map((movie, index) => {
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