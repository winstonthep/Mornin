import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewTodo = (props) => {
  const [ newTodo, setNewTodo ] = useState('');
  const [ newUser, setNewUser ] = useState('');
  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setNewUser(e.target.value);
    }
    if(e.target.name === 'todo') {
      setNewTodo(e.target.value);
    }
  }
  const handleSubmit = (e) => {
    let todoObj = {
      todo: newTodo,
      user: newUser
    };
    e.preventDefault();
    axios.post('/newtodo', todoObj)
      .then((response) => {
        props.retrieveTodos();
      })
      .then(() => {
        setNewUser('');
        setNewTodo('');
      })
      .catch((error) => {
        console.error('Todo retrieval error:', error);
      });
  }

    return (
      <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name='username' value={newUser} onChange={handleChange} /> <br></br>
      </label>
      <label>
        New To-Do:
        <input type="text" name="todo" value={newTodo} onChange={handleChange} /><br></br>
      </label>
      <input type="submit" value="Submit" />
    </form>
    )
}

export default NewTodo;