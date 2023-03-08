import { useState } from 'react'
import UserContex from './context/UserContex'
import './App.css'
import User from './components/User'
import ChangeUser from './components/ChangeUser'

function App() {
  const [user, setUser] = useState('')
  return (
    <UserContex.Provider
      value={{
        changeUser: user,
        setChangeUser: setUser,
      }}
    >
      <div className="App">
        <User />
        <ChangeUser />
      </div>
    </UserContex.Provider>
  )
}

export default App
