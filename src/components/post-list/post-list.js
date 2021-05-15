import React from 'react';
import PostListItem from '../post-list-item/post-list-item'
import { ListGroup } from 'reactstrap';
import './post-list.scss';

const PostList = ({posts, onDelete, onToggleImportant, onToggleDone}) => {

  const elements = posts.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className='list-group-item'>
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    )
  })

  return (
    <ListGroup className='app-list'>
      {elements}
    </ListGroup>
  )
}

export default PostList;