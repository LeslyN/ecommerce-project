import Link from "./Link";

function Navbar() {
  return (
    <nav>
      <ul>
        <Link name={'Home'}></Link>
        <Link name={'Clothing'}></Link>
        <Link name={'Shoes'}></Link>
        <Link name={'Accesories'}></Link>
        <Link name={'About us'}></Link>
      </ul>
    </nav>
  )
}

export default Navbar