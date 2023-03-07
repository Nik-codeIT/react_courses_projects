import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import React from 'react'
import styles from './Todo.module.css'

const Todo = ({ el, deleteTodo, toggleTodo }) => {
  return (
    <div
      className={`${styles.todo} ${el.isCompleted ? styles.completedTodo : ''}`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{el.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(el.id)}
      />
      <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(el.id)} />
    </div>
  )
}

export default Todo
