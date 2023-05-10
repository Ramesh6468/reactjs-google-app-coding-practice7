// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {input: ''}

  onClickInput = event => {
    this.setState({input: event.target.value})
  }

  clickArrow = value => {
    this.setState({
      input: value,
    })
  }

  render() {
    const {input} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(input.toLowerCase()),
    )
    return (
      <div className="bgContainer1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image1"
        />
        <div className="searchcard">
          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchIcon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="searchBox"
              value={input}
              onChange={this.onClickInput}
            />
          </div>
          <ul className="searchList">
            {searchResults.map(each => (
              <SuggestionItem
                suggestionDetails={each}
                key={each.id}
                clickArrow={this.clickArrow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
