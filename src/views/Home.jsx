import Sidebar from '../sectionComponents/Sidebar/Sidebar'
import Header from '../sectionComponents/Header/Header'
import HomeImages from '../components/HomeImages/HomeImages'

function Home() {
  return (
    <div className='home layout'>
      <Sidebar></Sidebar>
      <Header></Header>
      <main className="main">
        <HomeImages/>
      </main>
    </div>
  )
}

export default Home
