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
  const locomotive = new LocomotiveScroll();

  return (
    <div className="bg-black w-full min-h-screen">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}


export default App;
