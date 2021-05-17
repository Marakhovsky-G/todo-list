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
        // { label: 'Going to learn React', important: false, done: false, id: 1 },
        // { label: 'Thats so good', important: false, done: false, id: 2 },
        // { label: 'I need a break...', important: true, done: false, id: 3 }
      ],
      term: '',
      filter: 'all'
    };
  }


  stateToLS() {
    for (let i = 0; i < this.state.data.length; i++) {
      const obj = this.state.data[i]
      localStorage.setItem(`post-${i}`, JSON.stringify(obj));
    }
  }

  LSToState() {
    const newArr = [];
    for (let i = 0; i < localStorage.length; i++) {
      newArr.push(JSON.parse(localStorage.getItem(`post-${i}`)))
    }
    this.setState(({data}) => {
      return {
        data: newArr
      }
    })
  }

  componentDidMount() {
    this.stateToLS();
    this.LSToState()
  }

  componentDidUpdate() {
    localStorage.clear();
    this.stateToLS();
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
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
    const randomIt = function () {
      return '_' + Math.random().toString(36).substr(2, 9);
    };
    const res = randomIt();
    const newItem = {
      label: body,
      important: false,
      id: res
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })

  }

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = { ...old, important: !old.important };

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    });
  }

  onToggleDone = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = { ...old, done: !old.done };

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    });
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term) > -1
    });
  }

  filterPost(items, filter) {
    if (filter === 'done') {
      return items.filter(item => item.done)
    } else if (filter === 'important') {
      return items.filter(item => item.important)
    } else if (filter === 'notDone') {
      return items.filter(item => !item.done)
    } else {
      return items
    }
  }

  onUpdateSearch = (term) => {
    this.setState({ term })
  }

  onFilterSelect = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { data, term, filter } = this.state,
      done = data.filter(item => item.done).length,
      allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <div className='app'>
        <AppHeader
          done={done}
          allPosts={allPosts}
        />
        <div className='search-panel d-flex'>
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <PostAddForm
          onAdd={this.addItem} />
      </div>
    )
  }
}
