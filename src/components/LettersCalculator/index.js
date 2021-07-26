// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeInputSearch = event =>
    this.setState({count: event.target.value.length})

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="text-container">
          <h1 className="heading">
            Calculate the
            <br />
            Letters you enter
          </h1>
          <label htmlFor="input-phrase" className="label">
            Enter the phrase
          </label>
          <input
            type="text"
            className="search"
            id="input-phrase"
            placeholder="Enter the phrase"
            onChange={this.onChangeInputSearch}
          />
          <p className="char-count">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="img"
          className="img-size"
        />
      </div>
    )
  }
}
export default LettersCalculator
