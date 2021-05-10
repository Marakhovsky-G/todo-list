import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';


const App = () => {

  const data = [
    {label: 'Going to learn React', important: false, id:'dsfsd'},
    {label: 'Thats so good', important: false, id:'cxvxc'},
    {label: 'I need a break...', important: true, id:'uioefd'}
  ];

  return (
    <div className='app'>
      <AppHeader/>
      <div className='search-panel d-flex'>
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </div>
  )
}

export default App;