import { NavLink } from 'react-router-dom'

function LinkMenu({ name, route }) {
  return (
    <li className='navbar__item'>
      <NavLink
        className='navbar__link'
        to={`${route}`}
        style={({ isActive }) =>
          isActive
            ? { background: 'rgba(251, 46, 134, 12%)', color: '#fb2e86' }
            : {}
        }
      >
        {name}
      </NavLink>
    </li>
  )
}

export default LinkMenu
