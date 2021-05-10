import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: 'Going to learn React', important: false, id: 1},
        {label: 'Thats so good', important: false, id: 2},
        {label: 'I need a break...', important: true, id: 3}
      ]
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id),

            before = data.slice(0, index),
            after = data.slice(index + 1),

            newArr = [...before, ...after];

    return {
      data: newArr
    }
    })
  }

  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })

  }

  render() {
    return (
      <div className='app'>
        <AppHeader/>
        <div className='search-panel d-flex'>
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList
          posts={this.state.data}
          onDelete={this.deleteItem}/>
        <PostAddForm
          onAdd={this.addItem}/>
      </div>
    )
  }
}
