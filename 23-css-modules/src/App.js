import './App.css'
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <Info />
      {/* info2 СSS rule from the Info CSS module doesn't work*/}
      <div className="info2">
        <h1>Hello from App h1</h1>
        <h2>Heading app</h2>
        <button className="myBtn">App but</button>
      </div>
    </div>
  )
}

export default App
