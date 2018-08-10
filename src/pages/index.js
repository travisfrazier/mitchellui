import React from 'react'
import TotalSales from '../components/total-sales/total-sales'
import Movie from '../components/movie/movie'
import './main.scss'

const IndexPage = () => (
  <div className="main__wrapper">
    <div className="totalSales__wrapper">
      <TotalSales />
    </div>
    <div className="movie__wrapper">
      <Movie title="Movie 1" />
      <Movie title="Movie 2" />
    </div>
  </div>
)

export default IndexPage
