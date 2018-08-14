import React, { Component } from 'react'
const API_KEY = '39df1c4c7a287510f53854893ba3d788'

class Movie extends Component {
    render() {
        const baseURL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
        return (
            <li className="movie">
                <section className="movie-title-and-image">
                    <h3 className="center">{this.props.title}</h3>
                    <img src={baseURL + this.props.image} alt="movie-pic"/>
                </section>
                <section className="movie-release-date-and-description">
                    <h3 className="movie-release-date">Release Date: <span>{this.props.releaseDate}</span></h3>
                    <p className="movie-description">{this.props.plot}</p>
                </section>
            </li>
        )
    }
}

export default Movie