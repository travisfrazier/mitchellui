import React from 'react'
import './_Movie.scss'

export class Movie extends React.Component {
  render() {
    return (
      <section className="movie">
        <h2 className="movie__title">{this.props.title}</h2>
        <p className="movie__release">
          <strong>Release Date</strong> 04 Jan 2015
        </p>
        <div className="movie__date">
          <span>May 3 2015</span>
          <button className="movie__button">Buy Tickets</button>
        </div>
        <div className="movie__date">
          <span>May 3 2015</span>
          <button className="movie__button">Buy Tickets</button>
        </div>
      </section>
    )
  }
}
