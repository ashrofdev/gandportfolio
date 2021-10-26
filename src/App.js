import './App.scss';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import HeadsUp from './components/HeadsUp';
import Hero from './components/Hero';
import Hire from './components/Hire';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';


import Modal from 'react-modal';
import { useState } from 'react';

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () =>{
    setModalIsOpen(true)
  }


  const closeModal = () =>{
    setModalIsOpen(false)
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'40vw',
      position:'relative',
      zIndex:'100',
      border:'none',
      borderRadius: '.5rem',
      boxShadow:'1px 1px 1rem rgba(7, 7, 7, 0.474)',
    
    },
    overlay: {
      backgroundColor: 'rgba(7, 7, 7, 0.574)'
    },
  };

  return (
    <div className="App">
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
     
        >
          <p onClick={closeModal} style={{textAlign:'right', fontSize:'1.3rem', cursor:'pointer'}}>&times;</p>
          <h3 style={{margin:'1rem 0', textAlign:'center'}}>Contact Me</h3>
          <div>
            <Contact/>
          </div>
          
        </Modal>
      </div>


      {/* Header */}
      <Header/>
      
      {/* // hero */}
      <Hero openModal={openModal} />

      {/* benefite */}
      <HeadsUp/>

      {/* skills */}
      <Skills/>

      {/* portfolio */}
      <Portfolio/>

      {/* hire me */}
      <Hire openModal={openModal}/>

      {/* testimonials */}
      <Testimonials/>

     

      {/* footer */}
      <Footer/>

    </div>
  );
}

export default App;
