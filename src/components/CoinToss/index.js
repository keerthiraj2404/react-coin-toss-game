// Write your code here

import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        headsCount: prevState.headsCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHead: false,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {isHead, headsCount, tailsCount} = this.state
    const imageUrl = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="app-heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img className="coin-image" src={imageUrl} alt="toss result" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="count">Total: {headsCount + tailsCount} </p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
