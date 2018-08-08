import React from 'react'
import './_order-count.scss'

export class OrderCount extends React.Component {
  render() {
    const styles = {
      width: this.props.width,
      backgroundColor: this.props.color,
    }
    return (
      <div className="orderCount">
        <p className="orderCount__total">{this.props.total}</p>
        <span className="orderCount__movie">
          Total orders - {this.props.title}
        </span>
        <div className="orderCount__meter">
          <span style={styles} className="orderCount__progress" />
        </div>
      </div>
    )
  }
}
