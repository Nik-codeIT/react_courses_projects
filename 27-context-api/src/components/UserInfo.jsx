import UserContex from '../context/UserContex'
import { useContext } from 'react'

const UserInfo = () => {
  const { changeUser } = useContext(UserContex)
  return <h1>{changeUser}</h1>
}

export default UserInfo
