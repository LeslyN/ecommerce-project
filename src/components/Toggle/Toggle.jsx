function Toggle({ open, onClick }) {
	return (
		<button className={`toggle ${open ? 'open' : ''}`} onClick={onClick}>
			<div className={`toggle__line ${open ? 'open' : ''}`}></div>
			<div className={`toggle__line ${open ? 'open' : ''}`}></div>
			<div className={`toggle__line ${open ? 'open' : ''}`}></div>
		</button>
	)
}

export default Toggle
