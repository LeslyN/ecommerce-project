import Header from '../sectionComponents/Header/Header'
import Sidebar from '../sectionComponents/Sidebar/Sidebar'
import AccesoriesList from '../components/AccesoriesList/AccesoriesList'

function Accesories({ products }) {
  return (
    <div className='home layout'>
      <Sidebar />
      <Header />
      <main className='main'>
        <AccesoriesList products={products} />
      </main>
    </div>
  )
}

export default Accesories
