import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import HeadsUp from './components/HeadsUp';
import Hero from './components/Hero';
import Hire from './components/Hire';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      
      {/* // hero */}
      <Hero/>

      {/* benefite */}
      <HeadsUp/>

      {/* skills */}
      <Skills/>

      {/* portfolio */}
      <Portfolio/>

      {/* hire me */}
      <Hire/>

      {/* testimonials */}
      <Testimonials/>

      {/* footer */}
      <Footer/>

    </div>
  );
}

export default App;
