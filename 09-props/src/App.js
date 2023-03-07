import './App.css'
import PetInfo from './components/PetInfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="doggy" age={5} />
      <PetInfo animal="cat" age={2} />
    </div>
  )
}

export default App
