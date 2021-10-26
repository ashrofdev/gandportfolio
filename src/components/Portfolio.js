import React, { useState } from 'react';

import venue from '../img/venue.png'
import natours from '../img/natours.png'
import nexter from '../img/nexter.png'
import trello from '../img/trello.png'
import letme from '../img/letme.png'
import huddle from '../img/huddle.png'
import butgety from '../img/butgety.png'
import fsp from '../img/fsp.png'

const Portfolio = () => {

    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(6)
    const [category, setCategory] = useState('all')

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

    return (
        <div className="container portfolio">
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
                            return <div className="project">
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