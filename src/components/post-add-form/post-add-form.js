import React, { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  onValueChange = (evt) => {
    this.setState({
      text: evt.target.value
    })
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    })
  }

  randomPlaceholder() {
    const data = {
      1: 'Ваше следующее дело?',
      2: 'Ваш новый подвиг...',
      3: 'Ваше новое приключение?',
      4: 'Новая задача?',
      5: 'Опять работать :('
    }

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }

    return data[getRandomInt(1, 5)];
  }



  render() {
    return (
      <form
        className='bottom-panel d-flex'
        onSubmit={this.onSubmit}
      >
        <input
          type='text'
          placeholder={this.randomPlaceholder()}
          className='form-control new-post-label'
          onChange={this.onValueChange}
          value={this.state.text}
          required
        />
        <button
          type='submit'
          className='btn btn-outline-primary'>
            <i className="fas fa-plus-circle"/> Добавить
        </button>
      </form>
    )
  }
}
