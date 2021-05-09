import React from 'react';

const PostListItem = () => {
  return (
    <li className='app-list-item d-flex justify-comtent-between'>
      <span className='app-list-item-label lead'>
        Message text, text, text...
      </span>
      <div className='d-flex justify-comtent-center align-items-center'>
        <button type='button' className='btn-star btn-sm'>
          <i className='bi bi-star'/>
        </button>
        <button type='button' className='btn-trash btn-sm'>
          <i className='bi bi-trash'/>
        </button>
        <i className='bi bi-heart'/>
      </div>
    </li>
  )
}

export default PostListItem;