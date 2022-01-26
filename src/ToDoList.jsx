import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoItem from './ToDoItem.jsx';
import NewTodo from './newTodo.jsx';

const ToDoList = () => {
  const [ todos, setTodos ] = useState([]);
  const [ newTodo, setNewTodo ] = useState('');
  const [ newUser, setNewUser ] = useState('');

  const retrieveTodos = () => {
    axios.get('/todos')
      .then((response) => {
        console.log(response.data);
        setTodos(response.data);
      })
      .catch((error) => {
        console.error('Todo retrieval error:', error);
      });
  }


  useEffect(() => {
    retrieveTodos();
  }, []);

    return (
      <>
        <h2 className="todoheader">To-Do List</h2>
        <ul className="todolist">
          {todos.map((todo, i) => (
              <ToDoItem todo={todo} />
          ))}
        </ul>
        <NewTodo retrieveTodos={retrieveTodos}/>
      </>
    )
}

export default ToDoList;