import { useState } from 'react'

import Toggle from '../../components/Toggle/Toggle'

import Like from '../../components/Icons/Like'
import Logo from '../../components/Icons/LogoMobile'
import SearchIcon from '../../components/Icons/SearchIcon'
import Cart from '../../components/Icons/Cart'
import Menu from '../../components/Menu/Menu'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggle = () => {
    function toggleMenu(prevMenuOpen) {
      return !prevMenuOpen
    }

    setMenuOpen(toggleMenu)
  }

  return (
    <>
      <header className='header'>
        <div className='header__item' onClick={handleToggle}>
          <Toggle open={menuOpen} ariaLabel={'menu open'} />
        </div>

        <Menu open={menuOpen} />

        <Like />
        <Logo />
        <SearchIcon></SearchIcon>
        <Cart></Cart>
      </header>
    </>
  )
}

export default Header
