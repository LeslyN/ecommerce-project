import AccesoriesItem from '../AccesoriesItem/AccesoriesItem'

function AccesoriesList({ products }) {
  return (
    <ul className='accesories-list'>
      {products.map((product) => (
        <AccesoriesItem key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default AccesoriesList
