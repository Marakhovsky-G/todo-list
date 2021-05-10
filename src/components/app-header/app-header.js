import React from 'react';
import './app-header.css';

const AppHeader = () => {
  return (
    <div className="app-header d-flex align-items-center">
      <h1 className='text-primary'>Georgy</h1>
      <small className='text-muted'>5 записей, из них понравилось 0</small>
    </div>
  )
}

export default AppHeader;