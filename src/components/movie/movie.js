import React from 'react'
import './_movie.scss'

export class Movie extends React.Component {
  render() {
    return (
      <section className="mov">
        <h2 className="mov__title">{this.props.title}</h2>
        <p className="mov__release">
          <strong>Release Date</strong> &#128336; 04 Jan 2015
        </p>
        <div className="mov__date">
          <span>May 3 2015</span>
          <button className="mov__button">Buy Tickets</button>
        </div>
        <div className="mov__date">
          <span>May 3 2015</span>
          <button className="mov__button">Buy Tickets</button>
        </div>
      </section>
    )
  }
}
