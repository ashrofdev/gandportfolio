import React from 'react';

const Hire = ({openModal}) => {
    return (
        <div className="fullwidth hire">
            <h4>Let's get your task completed together</h4>
            <button onClick={openModal} style={{marginTop:"2rem"}}>Hire now</button>
        </div>
    );
};

export default Hire;
