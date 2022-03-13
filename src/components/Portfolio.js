import React, { useState } from "react";

import pantone from "../img/pantone.png";
import ultra from "../img/ultra.jpeg";
import fsp from "../img/fsp.png";

import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(6);
	const [category] = useState("all");
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedProject, setSelectedPoject] = useState({});

	const projects = [
    {
      title: "Pantone",
      img: pantone,
      info: "A color picking, combination and color sharing app, designed to help color lovers get productive in an easier way",
      url: "https://connect.pantone.com",
      category: "all,landing",
    },
    {
      title: "FSP",
      img: fsp,
      info: "An investment based web app that allows users to create a portfolio of investment with the company, monitor their investment plan, and withdraw earnings when needed.",
      url: "https://freedomsynergypro.com/",
      category: "all,landing,react",
    },
    {
      title: "Ultratalk",
      img: ultra,
      info: "A social media bot builder web app designed to allow users create their own social media bots to respond to their target customers on Facebook, Instagram, Whatsapp ans SMS",
      url: "https://ultratalk.io/",
      category: "all",
    },
  ];

	const movePage = (direction) => {
		if (
			(direction < 0 && start <= 0) ||
			(direction > 0 && end >= projects.length)
		) {
			return;
		}
		setStart(start + direction);
		setEnd(end + direction);
	};

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			position: "relative",
			zIndex: "100",
			border: "none",
			borderRadius: ".5rem",
			boxShadow: "1px 1px 1rem rgba(7, 7, 7, 0.474)",
		},
		overlay: {
			backgroundColor: "rgba(7, 7, 7, 0.574)",
		},
	};

	return (
    <div className="container portfolio">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="modalcontainer"
      >
        <div>
          <p
            onClick={closeModal}
            style={{
              textAlign: "right",
              fontSize: "1.3rem",
              cursor: "pointer",
            }}
          >
            &times;
          </p>
          <div>
            <img
              style={{ width: "100%", margin: ".5rem 0" }}
              src={selectedProject.img}
              alt="pgimg"
            />
          </div>
          <div style={{ margin: "1rem 0" }}>
            <h3 style={{ margin: ".3rem 0" }}>{selectedProject.title}</h3>
            <a
              href={selectedProject.url}
              style={{ textDecoration: "none", fontStyle: "italic" }}
            >
              <FontAwesomeIcon style={{ marginRight: ".3rem" }} icon={faLink} />
              {selectedProject.title}
            </a>
            <p style={{ marginTop: "1rem" }}>{selectedProject.info}</p>
          </div>
        </div>
      </Modal>
      <h4 style={{ textAlign: "center" }}>My Recent projects</h4>
      <p>Here are 3 of my most recent projects</p>
      <div className="nav">
        {/* <button onClick={() => setCategory("all")}>All</button> */}
        {/* <button onClick={() => setCategory("react")}>React</button>
				<button onClick={() => setCategory("landing")}>Landing page</button>
				<button onClick={() => setCategory("api")}>API integration</button> */}
      </div>

      <div className="projects">
        {projects
          .map((project) =>
            project.category.includes(category) ? (
              <div
                onClick={() => {
                  setSelectedPoject(project);
                  openModal();
                }}
                className="project"
              >
                <img alt="" src={project.img} />
                <div className="info">
                  <h5>{project.title}</h5>
                  <p>{project.info.slice(1, 20)}...</p>
                </div>
              </div>
            ) : null
          )
          .slice(start, end)}
      </div>
      {category === "all" ? (
        <div className="pagin" style={{ textAlign: "right" }}>
          <button onClick={() => movePage(-1)}>&larr; Prev</button>
          <button onClick={() => movePage(1)}>Next &rarr;</button>
        </div>
      ) : null}
    </div>
  );
};

export default Portfolio;
