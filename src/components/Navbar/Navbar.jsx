import Link from '../Link/Link'

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <Link name={'Home'}></Link>
        <Link name={'Clothing'}></Link>
        <Link name={'Shoes'}></Link>
        <Link name={'Accesories'}></Link>
        <Link name={'About us'}></Link>
      </ul>
    </nav>
  )
}

export default Navbar
