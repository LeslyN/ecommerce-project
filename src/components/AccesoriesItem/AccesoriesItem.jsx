function AccesoriesItem({ product }) {
  return (
    <li className='accesories-card'>
      <figure className='accesories-card__image'>
        <img src={product.image} alt={product.title} />
      </figure>
      <div class='accesories-card__content'>
        <span>{product.title} </span>
        <span>{product.price} </span>
      </div>
    </li>
  )
}

export default AccesoriesItem
