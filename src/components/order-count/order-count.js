import React from 'react'
import './_order-count.scss'

export const OrderCount = props => (
  <div className="orderCount">
    <p className="orderCount__total">2,346</p>
    <span className="orderCount__movie">Total orders - Movie 1</span>
    <div className="orderCount__meter">
      <span className="orderCount__progress" />
    </div>
  </div>
)
