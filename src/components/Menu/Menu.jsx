import LogoMobile from '../Icons/LogoMobile'

function Menu({ open }) {
  return (
    <div className={`menu ${open ? 'open' : ''}`}>
      <header className='menu-header'>
        <LogoMobile />
      </header>
      <hr className='menu__line' ariaHidden='true' />
      <div className=''></div>
    </div>
  )
}

export default Menu
