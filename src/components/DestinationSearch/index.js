import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchBox = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="DestinationSearchAppContainer">
        <h1 className="title">Destination Search</h1>
        <div className="searchBoxContainer">
          <input
            className="inputDesign"
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.onSearchBox}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchIcon"
          />
        </div>
        <ul className="destinationsContainer">
          {searchResults.map(eachDestination => (
            <DestinationItem
              destination={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
