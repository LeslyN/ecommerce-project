import Sidebar from '../sectionComponents/Sidebar/Sidebar'
import Header from '../sectionComponents/Header/Header'
import Main from '../sectionComponents/Main/Main'

function Home() {
  return (
    <div className='home layout'>
      <Sidebar></Sidebar>
      <Header></Header>
      <Main></Main>
    </div>
  )
}

export default Home
