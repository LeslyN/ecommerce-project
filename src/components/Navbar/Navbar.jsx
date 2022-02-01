import LinkMenu from '../Link/LinkMenu'

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <LinkMenu name={'Home'} route={'/'}></LinkMenu>
        <LinkMenu name={'Clothing'} route={'/clothing'}></LinkMenu>
        <LinkMenu name={'Shoes'} route={'/shoes'}></LinkMenu>
        <LinkMenu name={'Accesories'} route={'/accesories'}></LinkMenu>
        <LinkMenu name={'About us'} route={'/about-us'}></LinkMenu>
      </ul>
    </nav>
  )
}

export default Navbar
