import React from 'react'
import './_total-sales.scss'
import { Graph } from '../graph/graph'
import { OrderCount } from '../order-count/order-count'

export const TotalSales = props => (
  <section className="totalSales">
    <div className="totalSales__content">
      <h2 className="totalSales__title">Total Movie Sales</h2>
      <span>
        Average value of sales in the past month in:{' '}
        <strong>United States</strong>
      </span>
    </div>
    <div className="totalSales__content">
      <span>Comparison - Movie 1 and Movie 2</span>
      <span>All sales: 162,862</span>
    </div>
    <div className="totalSales__results">
      <Graph />
      <div className="totalSales__meters">
        <OrderCount title="Movie 1" total="2,346" color="#adadad" width="40%" />
        <OrderCount title="Movie 2" total="4,422" color="#209787" width="60%" />
      </div>
    </div>
    <div className="totalSales__content totalSales__content--value">
      <span>
        <strong>Analysis of sales: </strong>The value has been changed over
        time, and last month reach a level over $50,000.
      </span>
      <span>Update on 16.07.2015</span>
    </div>
  </section>
)
