import React from 'react'
import './Info.css'
import styles from './info.module.css'

console.log(styles)
/*{
    "info2": "info_info2__Bx2YG",
    "myOtherBut": "info_myOtherBut__5aHBw"
} что мы импортируем из module.css*/
const Info = () => {
  return (
    <div className={styles.info2}>
      <h1>Hello from the Info component</h1>
      <h2>Heading info</h2>
      <button className="myBtn">Click me INFO</button>
      <button className={styles.myOtherBut}>
        Button with local CSS styles
      </button>
    </div>
  )
}

export default Info
