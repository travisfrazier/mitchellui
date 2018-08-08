import React from 'react'
import './_order-count.scss'

export class OrderCount extends React.Component {
  render() {
    const styles = {
      width: this.props.width,
      backgroundColor: this.props.color,
    }
    return (
      <div className="ordCount">
        <p className="ordCount__total">{this.props.total}</p>
        <span className="ordCount__movie">
          Total orders - {this.props.title}
        </span>
        <div className="ordCount__meter">
          <span style={styles} className="ordCount__progress" />
        </div>
      </div>
    )
  }
}
