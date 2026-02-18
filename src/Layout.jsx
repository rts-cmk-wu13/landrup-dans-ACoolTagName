/*import LogoutButton from './componets/LogoutButton'
import Navigation from './componets/Navigation'*/
import { Outlet } from 'react-router'
import Header from './components/Header'

function Layout() {



  return (
    <>
      <main>
        <Outlet />
      </main>
      <Header />
      <footer><small>© 2024 My App</small></footer>
    </>
  )
}



export default Layout
