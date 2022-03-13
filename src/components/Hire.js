import React from 'react';

const Hire = ({openModal}) => {
    return (
      <div className="fullwidth hire">
        <h4>Let's get your task completed together</h4>
        <button onClick={openModal} style={{ marginTop: "2rem" }}>
          <a
            style={{ color: "white" }}
            target="_blank"
            rel="noreferrer"
            href="https://firebasestorage.googleapis.com/v0/b/files-67729.appspot.com/o/mobile.pdf?alt=media&token=f173fd00-3595-4653-8693-132eaf1e07c1"
          >
            Download CV &rarr;
          </a>
        </button>
      </div>
    );
};

export default Hire;
