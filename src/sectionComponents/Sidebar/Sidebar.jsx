import LogoDesktop from '../../components/LogoDesktop/LogoDesktop'
import Navbar from '../../components/Navbar/Navbar'
import SocialNetwork from '../../components/SocialNetWork/SocialNetwork'

function Sidebar() {
  return (
    <aside className='sidebar'>
      <LogoDesktop />
      <h1 className='sidebar__title'>Explore</h1>

      <Navbar></Navbar>
      <SocialNetwork />
    </aside>
  )
}

export default Sidebar
