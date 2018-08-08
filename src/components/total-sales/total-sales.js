import React from 'react'
import './_total-sales.scss'
import { Graph } from '../graph/graph'
import { OrderCount } from '../order-count/order-count'

export const TotalSales = props => (
  <section className="totSales">
    <div className="totSales__content">
      <h2 className="totSales__title">Total Movie Sales</h2>
      <span>
        Average value of sales in the past month in:{' '}
        <strong className="totSales__loc--tab">United States</strong>
        <strong className="totSales__loc--pho">USA</strong>
      </span>
    </div>
    <div className="totSales__content">
      <span>Comparison - Movie 1 and Movie 2</span>
      <span>All sales: 162,862</span>
    </div>
    <div className="totSales__results">
      <Graph />
      <div className="totSales__meters">
        <OrderCount title="Movie 1" total="2,346" color="#adadad" width="40%" />
        <OrderCount title="Movie 2" total="4,422" color="#209787" width="60%" />
      </div>
    </div>
    <div className="totSales__content totSales__content--value">
      <span>
        <strong>Analysis of sales: </strong>The value has been changed over
        time, and last month reached a level over $50,000.
      </span>
      <span>&#128336;Update on 16.07.2015</span>
    </div>
  </section>
)
