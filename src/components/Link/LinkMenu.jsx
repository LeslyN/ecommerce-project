import { Link } from 'react-router-dom'

function LinkMenu({ name, route }) {
  return (
    <li className='navbar__item'>
      <Link className='navbar__link' href='' to={`${route}`}>
        {name}
      </Link>
    </li>
  )
}

export default LinkMenu
