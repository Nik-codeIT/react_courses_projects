import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  const arr = [
    'Нажми на меня',
    'Щелкни на меня',
    'Выжми на меня',
    'Прибавь',
    'Кликни',
    'Прибавь еще',
  ]

  return (
    <div className="App">
      <Counter count={count} />
      {arr.map((el) => {
        return <Button onClick={incrementCount} text={el} key={el} />
      })}

      {/* {[
        <Button onClick={incrementCount} text={arr[0]} />,
        <Button onClick={incrementCount} text={arr[1]} />,
        <Button onClick={incrementCount} text={arr[2]} />,
        <Button onClick={incrementCount} text={arr[3]} />,
        <Button onClick={incrementCount} text={arr[4]} />,
        <Button onClick={incrementCount} text={arr[5]} />,
      ]} */}
    </div>
  )
}

export default App
