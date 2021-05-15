import React, { Component } from 'react';

import './post-status-filter.css';

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      {name: 'all', label: 'Все'},
      {name: 'done', label: 'Выполненные'},
      {name: 'notDone', label: 'Невыполненные'},
      {name: 'important', label: 'Важные'}
    ]
  }

  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const {filter, onFilterSelect} = this.props;
      const active = filter === name;
      const clazz = active ? 'btn-primary' : 'btn-outline-primary'
      return (
        <button
          key={name}
          type='button'
          className={`btn ${clazz}`}
          onClick={() => onFilterSelect(name)}
          >{label}
        </button>
      )
    })
    return (
      <div className='btn-group'>
        {buttons}
      </div>
    )
  }
}
