import Facebook from '../Icons/Facebook'
import Twitter from '../Icons/Twitter'
import Instagram from '../Icons/Instagram'

function SocialNetwork() {
  return (
    <nav className='social'>
      <ul className='social__list'>
        <li className='social__item'>
          <a className='social__link' href='#' target='_blank'>
            <Facebook></Facebook>
          </a>
        </li>
        <li className='social__item'>
          <a className='social__link' href='#' target='_blank'>
            <Twitter></Twitter>
          </a>
        </li>
        <li className='social__item'>
          <a className='social__link' href='#' target='_blank'>
            <Instagram></Instagram>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default SocialNetwork
