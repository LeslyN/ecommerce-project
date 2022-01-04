import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App max-w-screen-2xl m-auto grid grid-flow-row-dense grid-cols-3 grid-rows-3'>
      <sidebar className='bg-orange-900 row-span-2'>sidebar</sidebar>
      <main className='bg-purple-500 col-span-2'>main</main>
      <footer className='bg-red-200 col-span-2'>footer</footer>
    </div>
  )
}

export default App
