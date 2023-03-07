import { RiTodoFill } from 'react-icons/ri'
import React from 'react'
import styles from './Todo.module.css'

const Todo = ({ el, index, deleteTodo }) => {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{el}</div>
    </div>
  )
}

export default Todo
