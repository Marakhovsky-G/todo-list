import React, { Component } from 'react';

import './post-list-item.scss';

export default class PostListItem extends Component {

  render() {
    const {label, onDelete, onToggleImportant, onToggleDone, important, done} = this.props;

    let classNames = 'app-list-item d-flex justify-content-between';
    if (important) {
      classNames += ' important';
    }

    if (done) {
      classNames += ' done';
    }

    return (
      <div className={classNames}>
        <span className='app-list-item-label lead' onClick={onToggleDone}>
          {label}
        </span>
        <div className='d-flex justify-content-center align-items-center'>
          <button
            type='button'
            className='btn-star btn-sm'
            onClick={onToggleImportant}>
              <i className='fa fa-star' />
          </button>
          <button
            type='button'
            className='btn-trash btn-sm'
            onClick={onDelete}>
              <i className='fa fa-trash' />
          </button>
          <i className='far fa-check-square' />
        </div>
      </div>
    )
  }
}
