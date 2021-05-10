import React from 'react';
import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
  return (
    <div className="app-header d-flex align-items-center">
      <h1 className='text-primary'>Georgy</h1>
      <small className='text-muted'>{allPosts} записей, из них понравилось {liked}</small>
    </div>
  )
}

export default AppHeader;