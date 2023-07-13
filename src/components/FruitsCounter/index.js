// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.mango}`)
      return {mango: prevState.mango + 1}
    })
  }

  eatBanana = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.banana}`)
      return {banana: prevState.banana + 1}
    })
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="span-element ">{mango}</span> mangoes{' '}
            <span className="span-element">{banana}</span> bananas
          </h1>
          <div className="fruit-icons">
            <div className="fruit-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button type="button" className="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button type="button" className="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
