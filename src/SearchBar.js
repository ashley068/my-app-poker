import React from "react";

class SearchBar extends React.Component {
  state = { rank: "", suit: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.rank, this.state.suit);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Card Search</label>
            <input
              type="text"
              value={this.state.rank}
              onChange={(e) => this.setState({ rank: e.target.value })}
            />
          </div>
          <select
            className="ui dropdown"
            value={this.state.suit}
            onChange={(e) => this.setState({ suit: e.target.value })}
          >
            <option value="">Suit</option>
            <option value="clubs">♣ clubs</option>
            <option value="diams">♦ diams</option>
            <option value="hearts">♥ hearts</option>
            <option value="spades">♠ spades</option>
          </select>
          <br />
          <button className="ui button search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
