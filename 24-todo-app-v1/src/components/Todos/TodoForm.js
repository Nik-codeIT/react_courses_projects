import React, { useState } from 'react'
import styles from './TodoForm.module.css'

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')
  const onSubmitHandler = (ev) => {
    ev.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(ev) => {
            setText(ev.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default TodoForm
