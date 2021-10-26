import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <div className="flex" style={{width:'100%'}}>
                <input placeholder="Name" />
                <input placeholder="Email" />
            </div>
            <textarea style={{width:'100%', height:'20vh'}} placeholder="Tell me a little about you project"></textarea>
        </div>
    );
};

export default Contact;