import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from "./components/Marquee"
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'

import LocomotiveScroll from 'locomotive-scroll'
function App() {
  const locomotive=new LocomotiveScroll()
  return (
    <>
      <div className="  bg-black w-full h-screen">
        <Navbar></Navbar>
        <Landing/>
        <Marquee></Marquee>
        <About></About>
        <Eyes></Eyes>
        <Featured></Featured>
        <Cards></Cards>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
