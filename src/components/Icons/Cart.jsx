function Cart({ tabIndex, className }) {
  return (
    <svg
      className='cart'
      tabIndex={`${tabIndex}`}
      width='16'
      height='15'
      viewBox='0 0 16 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_583_10511)'>
        <path
          d='M13.3223 11.3487H4.93418L2.46708 0.986816H0.986816M2.9605 2.9605H14.8026L13.3223 9.37497H4.44076L2.9605 2.9605Z'
          stroke='black'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12.3355 14.3091C12.8805 14.3091 13.3223 13.8673 13.3223 13.3223C13.3223 12.7773 12.8805 12.3354 12.3355 12.3354C11.7905 12.3354 11.3486 12.7773 11.3486 13.3223C11.3486 13.8673 11.7905 14.3091 12.3355 14.3091Z'
          stroke='black'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.92092 14.3091C6.46594 14.3091 6.90777 13.8673 6.90777 13.3223C6.90777 12.7773 6.46594 12.3354 5.92092 12.3354C5.37591 12.3354 4.93408 12.7773 4.93408 13.3223C4.93408 13.8673 5.37591 14.3091 5.92092 14.3091Z'
          stroke='black'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_583_10511'>
          <rect width='15.8824' height='15' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Cart
