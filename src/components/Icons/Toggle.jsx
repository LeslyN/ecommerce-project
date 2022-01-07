function Toggle({ className }) {
  return (
    <svg className='toggle' width='20' height='14' viewBox='0 0 20 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M1 7H19' stroke='#1D2025' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M1 1H19' stroke='#1D2025' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M1 13H19' stroke='#1D2025' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  )
}

export default Toggle