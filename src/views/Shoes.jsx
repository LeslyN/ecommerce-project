import Header from '../sectionComponents/Header/Header'
import Sidebar from '../sectionComponents/Sidebar/Sidebar'

function Shoes() {
  return (
    <div className='home layout'>
      <Sidebar />
      <Header />
      <main className='main'>
        <h1>Shoes</h1>
      </main>
    </div>
  )
}

export default Shoes
