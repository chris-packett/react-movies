import React, { Component } from 'react'

class Movie extends Component {
    render() {
        return (
            <li className="movie">
                <section className="movie-title-and-image">
                    <h2>{this.props.title}</h2>
                    <img src={this.props.image} />
                </section>
                <p className="movie-description">{this.props.plot}</p>
            </li>
        )
    }
}

export default Movie