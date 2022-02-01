import Header from '../sectionComponents/Header/Header'
import Sidebar from '../sectionComponents/Sidebar/Sidebar'

function Clothing() {
  return (
    <div className='home layout'>
      <Sidebar />
      <Header />
      <main className='main'>
        <h1>Clothing</h1>
      </main>
    </div>
  )
}

export default Clothing
