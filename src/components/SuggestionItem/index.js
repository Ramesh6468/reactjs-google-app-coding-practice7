// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, clickArrow} = props
  const {suggestion} = suggestionDetails

  const onClickArrow = () => {
    clickArrow(suggestion)
  }

  return (
    <li className="searchContainer">
      <p className="name">{suggestion}</p>
      <button type="button" className="button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="image"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
