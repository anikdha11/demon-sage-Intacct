import './App.css';
import Header from './Components/Header/Header';

import HeroSection from './Components/Home/HeroSection/HeroSection';
import Footer from './Components/Footer/Footer';
import HomeSection1 from './Components/Home/HomeSection-1/HomeSection1';
import HomeSection2 from './Components/Home/HomeSection2/HomeSection2';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <HeroSection></HeroSection>
      <HomeSection1></HomeSection1>
      <HomeSection2></HomeSection2>
  
    <Footer></Footer>
    </div>
  );
}

export default App;
