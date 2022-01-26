import { useState } from 'react'
import { useGetWidth } from '../../hooks/useGetWidth'

import GetUp50Mobile from '../../assets/images/Home/mobile/50_off-mobile.svg'
import SummerMobile from '../../assets/images/Home/mobile/summer-mobile.svg'
import BoyMobile from '../../assets/images/Home/mobile/boy-mobile.svg'
import GirlMobile from '../../assets/images/Home/mobile/girl-mobile.svg'
import HeadphonesMobile from '../../assets/images/Home/mobile/headphone-mobile.svg'
import WatchMobile from '../../assets/images/Home/mobile/watch-mobile.svg'
import ShoeMobile from '../../assets/images/Home/mobile/shoes-mobile.svg'
import BackpackMobile from '../../assets/images/Home/mobile/backpack-mobile.svg'

import GetUp50 from '../../assets/images/Home/desktop/50_off.svg'
import Summer from '../../assets/images/Home/desktop/summer.svg'
import Boy from '../../assets/images/Home/desktop/boy.svg'
import Girl from '../../assets/images/Home/desktop/girl.svg'
import Headphones from '../../assets/images/Home/desktop/headphones.svg'
import Watch from '../../assets/images/Home/desktop/watch.svg'
import Shoe from '../../assets/images/Home/desktop/shoes.svg'
import Backpack from '../../assets/images/Home/desktop/backpack.svg'

function HomeImages() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const breakpointDesktop = 768

  useGetWidth(setWindowWidth)

  return (
    <div className='home-images'>
      <a className='home-images__item getup50' href='#'>
        <img
          src={windowWidth >= breakpointDesktop ? GetUp50 : GetUp50Mobile}
          alt='get up 50% image'
        />
      </a>
      <a className='home-images__item summer' href=''>
        <img
          src={windowWidth >= breakpointDesktop ? Summer : SummerMobile}
          alt='summer image'
        />
      </a>

      <a className='home-images__item boy' href=''>
        <img
          src={windowWidth >= breakpointDesktop ? Boy : BoyMobile}
          alt='bot image'
        />
      </a>
      <a className='home-images__item girl' href=''>
        <img
          src={windowWidth >= breakpointDesktop ? Girl : GirlMobile}
          alt='girl image'
        />
      </a>

      <a className='home-images__item headphone' href=''>
        <img
          src={windowWidth >= breakpointDesktop ? Headphones : HeadphonesMobile}
          alt='headphones image'
        />
      </a>
      <a className='home-images__item watch' href=''>
        <img
          src={windowWidth >= breakpointDesktop ? Watch : WatchMobile}
          alt='watch image'
        />
      </a>

      <a className='home-images__item shoe' href=''>
        <img
          src={windowWidth >= breakpointDesktop ? Shoe : ShoeMobile}
          alt='shoe image'
        />
      </a>
      <a className='home-images__item backpack' href=''>
        <img
          src={windowWidth >= breakpointDesktop ? Backpack : BackpackMobile}
          alt='backpack image'
        />
      </a>
    </div>
  )
}

export default HomeImages
