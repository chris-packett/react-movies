import React, { Component } from 'react'
import Movie from './Movie'
import movies from './1989.json'

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
                        let releaseDate = movie.release_date
                        let splitReleaseDate = releaseDate.split('-')
                        let parts = new Date(splitReleaseDate[0], splitReleaseDate[1] - 1, splitReleaseDate[2])
                        parts = parts.toDateString().split(' ')
                        parts[2] = parseInt(parts[2]).toString()
                        let dayWithSuffix = ''
                        if (parts[2] === '1' || parts[2] === '21' || parts[2] === '31') {
                            dayWithSuffix += `${parts[2]}st`
                        }
                        else if (parts[2] === '2' || parts[2] === '22') {
                            dayWithSuffix += `${parts[2]}nd`
                        }
                        else if (parts[2] === '3' || parts[2] === '23') {
                            dayWithSuffix += `${parts[2]}rd`
                        }
                        else {
                            dayWithSuffix += `${parts[2]}th`
                        }
                        let releaseDateString = `${parts[1]} ${dayWithSuffix}`

                        return <Movie 
                        title={movie.title} 
                        image={movie.poster_path} 
                        plot={movie.overview} 
                        releaseDate={releaseDateString} 
                        key={index}/>
                    })}
                </ul>
            </section>
        )
    }
}

export default MovieList