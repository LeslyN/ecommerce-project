function Toggle({ open }) {
  return (
    <button className={`toggle ${open ? 'open' : ''}`}>
      <div className={`toggle__line ${open ? 'open' : ''}`}></div>
      <div className={`toggle__line ${open ? 'open' : ''}`}></div>
      <div className={`toggle__line ${open ? 'open' : ''}`}></div>
    </button>
  )
}

export default Toggle
