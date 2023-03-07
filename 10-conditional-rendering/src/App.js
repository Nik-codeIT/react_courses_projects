import './App.css'
import PetInfo from './components/PetInfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="wolf" age={5} hasPet />
      <PetInfo animal="fox" age={20} hasPet={false} />
    </div>
  )
}

export default App
