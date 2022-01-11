function Button({ content, selector }) {
	return <button className={`button ${selector}`}>{content}</button>
}

export default Button
