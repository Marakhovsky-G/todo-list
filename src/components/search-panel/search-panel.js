import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (evt) => {
    const term = evt.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <input
        className="form-control seach-input"
        type='text'
        placeholder='Поиск по записям'
        onChange={this.onUpdateSearch}
      ></input>
    )
  }
}
