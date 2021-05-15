import React from 'react';
import './app-header.css';

const AppHeader = ({done, allPosts}) => {
  let postfix = '';

  if (allPosts === 0) {
    postfix = 'дел';
  } else if (allPosts === 1) {
    postfix = 'дело';
  } else if (allPosts > 1 && allPosts < 5) {
    postfix = 'дела';
  } else {
    postfix = 'дел';
  }

  return (
    <div className="app-header d-flex align-items-center">
      <h1 className='text-primary'>To do list</h1>
      <small className='text-muted'>{allPosts} {postfix}, из них выполненно {done}  ({allPosts === 0 ? '0' : Math.round(100 / allPosts * done)}%)</small>
    </div>
  )
}

export default AppHeader;