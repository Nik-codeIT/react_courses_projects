import UserContex from '../context/UserContex'
import { useContext } from 'react'

const ChangeUser = () => {
  const { changeUser, setChangeUser } = useContext(UserContex)
  return (
    <>
      <input
        style={{ height: '40px', paddingLeft: '10px' }}
        type="text"
        value={changeUser || ''}
        onChange={(e) => setChangeUser(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          setChangeUser(changeUser)
        }}
      >
        Change user
      </button>
    </>
  )
}

export default ChangeUser
