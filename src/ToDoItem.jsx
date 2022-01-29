import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ToDoItem = ({ todo }) => {
  const [ showTodo, setShowTodo ] = useState(true);

  const checkClick = (e) => {
    axios.put('/updatetodo', { id: todo.id })
      .then((response) => {
        console.log('put response:', response);
        setShowTodo(false);
      })
      .catch((error) => {
        console.log('put error:', error);
      })
  }
  if (todo.done === 0) {
    return (
       <li className={showTodo ? "todoitem" : "checked"}>{todo.note}  <span className={showTodo ? "check" : "checked"} onClick={checkClick}>&#10003;</span></li>
    )
  } else {
    return (
      <></>
    )
  }
}

export default ToDoItem;