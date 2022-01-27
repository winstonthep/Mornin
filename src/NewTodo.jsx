import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewTodo = (props) => {
  const [ newTodo, setNewTodo ] = useState('');
  const [ newUser, setNewUser ] = useState('');
  const [ submitMessage, setSubmitMessage] = useState('');
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
    if (newTodo.length > 0 && newUser.length > 0) {

      axios.post('/newtodo', todoObj)
        .then((response) => {
          props.retrieveTodos();
        })
        .then(() => {
          setNewTodo('');
          setSubmitMessage('')
        })
        .catch((error) => {
          console.error('Todo retrieval error:', error);
        });
    } else {
      setSubmitMessage('Please fill out both "Username" and "New To-Do" fields')
    }
  }

    return (
    <form className="todoform" onSubmit={handleSubmit}>
      <label>
        <span>Username<span className="required">*</span>:    </span>
        <input type="text" name='username' value={newUser} onChange={handleChange} /> <br></br> <br></br>
      </label>
      <label>
        <span>New To-Do<span className="required">*</span>:    </span>
        <input type="text" name="todo" value={newTodo} onChange={handleChange} /><br></br><br></br>
      </label>
      <div id="todosubmit">
        <input type="submit" id="submit" value="Add a To-Do" /><span id="submitspan">  {submitMessage}</span>
      </div>
    </form>
    )
}

export default NewTodo;