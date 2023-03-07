import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [todo, setTodo] = useState(null)
  useEffect(() => {
    console.log('callback from useEffect')
    fetch('https://jsonplaceholder.typicode.com/todos/4')
      .then((response) => response.json())
      .then((json) => setTodo(json))
    console.log('callback from useEffect2')
  }, [])
  console.log('App rendered')
  console.log(todo)
  console.log('sss')
  return <div className="App">{todo && <h1>{todo.title}</h1>}</div>
}

export default App
