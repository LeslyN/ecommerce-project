import { useState } from 'react'
import { useGetWidth } from '../../hooks/useGetWidth'

import Toggle from '../../components/Toggle/Toggle'
import Like from '../../components/Icons/Like'
import Logo from '../../components/Icons/LogoMobile'
import SearchIcon from '../../components/Icons/SearchIcon'
import Cart from '../../components/Icons/Cart'
import Menu from '../../components/Menu/Menu'
import Button from '../../components/Button/Button'
import Search from '../../components/Search/Search'

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [menuOpen, setMenuOpen] = useState(false)
  const breakpointDesktop = 960

  const handleToggle = () => {
    function toggleMenu(prevMenuOpen) {
      return !prevMenuOpen
    }

    setMenuOpen(toggleMenu)
  }

  useGetWidth(setWindowWidth)

  return (
    <>
      <header className='header'>
        {windowWidth >= breakpointDesktop && <Search />}

        {windowWidth < breakpointDesktop && (
          <Toggle
            open={menuOpen}
            ariaLabel={'menu open'}
            onClick={handleToggle}
          />
        )}

        {windowWidth < breakpointDesktop && <Menu open={menuOpen} />}

        {windowWidth < breakpointDesktop && <Like />}

        {windowWidth < breakpointDesktop && <Logo />}

        {windowWidth < breakpointDesktop && <SearchIcon />}

        <Cart tabIndex={0} />

        {windowWidth >= breakpointDesktop && (
          <Button content={'Sign in'} selector={'button--red'} />
        )}
      </header>
    </>
  )
}

export default Header
