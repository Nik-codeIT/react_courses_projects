import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

const MainLayout = () => {
  return (
    <>
      <h1>Hello all</h1>
      <Menu />
      <Outlet />
    </>
  )
}

export default MainLayout
