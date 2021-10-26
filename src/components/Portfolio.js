import React, { useState } from 'react';

import venue from '../img/venue.png'
import natours from '../img/natours.png'
import nexter from '../img/nexter.png'
import trello from '../img/trello.png'
import letme from '../img/letme.png'
import huddle from '../img/huddle.png'
import butgety from '../img/butgety.png'
import fsp from '../img/fsp.png'

import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {

    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(6)
    const [category, setCategory] = useState('all')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedProject, setSelectedPoject] = useState({})

    const projects = [
        {
            title: 'Huddle',
            img: huddle,
            info: 'Lorem ispum dorjbe kugr khg eugy  bnvehgg euuier eiur t ij khi eu wuyg eioquh uh ei si uher kwui ieonv',
            url: 'google.com',
            category: 'all,landing'
        },
        {
            title: 'FSP',
            img: fsp,
            info: 'Lorem ispum dorjbe kugr khg eugy  bnvehgg euuier eiur t ij khi eu wuyg eioquh uh ei si uher kwui ieonv',
            url: 'google.com',
            category: 'all,landing,react'
        },
        {
            title: 'Venue',
            img: venue,
            info: 'Lorem ispum dorjbe kugr khg eugy  bnvehgg euuier eiur t ij khi eu wuyg eioquh uh ei si uher kwui ieonv',
            url: 'google.com',
            category: 'all,landing,react,'
        },
        {
            title: 'Natours',
            img: natours,
            info: 'Lorem ispum dorjbe kugr khg eugy  bnvehgg euuier eiur t ij khi eu wuyg eioquh uh ei si uher kwui ieonv',
            url: 'google.com',
            category: 'all,landing'
        },
        {
            title: 'Trello',
            img: trello,
            info: 'Lorem ispum dorjbe kugr khg eugy  bnvehgg euuier eiur t ij khi eu wuyg eioquh uh ei si uher kwui ieonv',
            url: 'google.com',
            category: 'all,react'
        },
        {
            title: 'Nexter',
            img: nexter,
            info: 'Lorem ispum dorjbe kugr khg eugy  bnvehgg euuier eiur t ij khi eu wuyg eioquh uh ei si uher kwui ieonv',
            url: 'google.com',
            category: 'all,landing,react'
        },
        {
            title: 'Let me',
            img: letme,
            info: 'Lorem ispum dorjbe kugr khg eugy  bnvehgg euuier eiur t ij khi eu wuyg eioquh uh ei si uher kwui ieonv',
            url: 'google.com',
            category: 'all,landing'
        },
        {
            title: 'Budgety',
            img: butgety,
            info: 'Lorem ispum dorjbe kugr khg eugy  bnvehgg euuier eiur t ij khi eu wuyg eioquh uh ei si uher kwui ieonv',
            url: 'google.com',
            category: 'all'
        },

    ]

    const movePage = (direction) => {
        if((direction<0 && start<=0) || (direction>0 && end>=projects.length)){
            return
        }
        setStart(start+direction)
        setEnd(end+direction)
    }


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
        <div className="container portfolio">

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <p onClick={closeModal} style={{textAlign:'right', fontSize:'1.3rem', cursor:'pointer'}}>&times;</p>
                <div>
                    <img style={{width:'100%', margin:'.5rem 0'}} src={selectedProject.img} alt="pgimg"/>
                </div>
                <div style={{margin:'1rem 0'}}>
                    <h3 style={{margin:'.3rem 0',}}>{selectedProject.title}</h3>
                    <a href="google.com" style={{textDecoration:'none', fontStyle:'italic'}} ><FontAwesomeIcon style={{marginRight:'.3rem'}} icon={faLink} />swe</a>
                    <p style={{marginTop:'1rem'}}>{selectedProject.info}</p>
                </div>
                
            </Modal>
            <h4 style={{textAlign:'center'}}>My Recent projects</h4>
            <div className="nav">
                <button onClick={()=> setCategory('all')}>All</button>
                <button onClick={()=> setCategory('react')}>React</button>
                <button onClick={()=> setCategory('landing')}>Landing page</button>
                <button onClick={()=> setCategory('api')}>API integration</button>
            </div>

            <div className="projects">
                {
                    projects.map(project=>{
                        if(project.category.includes(category)){
                            return <div onClick={()=> {
                                setSelectedPoject(project)
                                openModal()
                            }} className="project">
                                    <img alt="" src={project.img} />
                                    <div className="info">
                                        <h5>{project.title}</h5>
                                        <p>{project.info.slice(1, 20)}...</p>
                                    </div>
                                </div>
                        }
                    }).slice(start, end)
                }
                
            </div>
            {
                category==='all'?
                <div className="pagin" style={{textAlign:'right'}}>
                    <button onClick={()=> movePage(-1)}>&larr; Prev</button>
                    <button onClick={()=> movePage(1)}>Next &rarr;</button>
                </div>:null
            }
        </div>
    );
};

export default Portfolio;