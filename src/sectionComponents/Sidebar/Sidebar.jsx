import LogoDesktop from '../../components/Icons/LogoDesktop'
import Navbar from '../../components/Navbar/Navbar'

function Sidebar() {
  return (
    <aside className='sidebar'>
      <LogoDesktop></LogoDesktop>
      <h1>Explore</h1>
      <Navbar></Navbar>
    </aside>
  )
}

export default Sidebar
