import Header from '../sectionComponents/Header/Header'
import Sidebar from '../sectionComponents/Sidebar/Sidebar'

function AboutUs() {
  return (
    <div className='home layout'>
      <Sidebar />
      <Header />
      <main className='main'>
        <h1>About us</h1>
      </main>
    </div>
  )
}

export default AboutUs
