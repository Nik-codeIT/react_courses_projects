import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((el, index) => (
        <Todo el={el} key={index} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}

export default TodoList
