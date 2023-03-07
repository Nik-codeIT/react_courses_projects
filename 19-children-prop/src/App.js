import './App.css'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className="App">
      <Wrapper color="blue">
        <h2>Hello friends</h2>
        <button>Please Click</button>
      </Wrapper>
      <Wrapper color="green">
        <h2>Another text</h2>
        <p>Some desc</p>
        <input type="text" placeholder="input here" />
      </Wrapper>
    </div>
  )
}

export default App
