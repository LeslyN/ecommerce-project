import Sidebar from "../Components/PrimaryComponents/Sidebar/Sidebar";
import Header from "../Components/PrimaryComponents/Header/Header";
import Main from '../Components/PrimaryComponents/Main/Main'

function Home() {
  return(
    <div className='bg-orange-400'>
      <Sidebar className='grid grid-cols-3'></Sidebar>
      <Header></Header>
      <Main></Main>
    </div>
  )
}

export default Home