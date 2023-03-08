import { createContext } from 'react'

const UserContex = createContext({
  changeUser: '',
  setChangeUser: () => {},
})
export default UserContex
