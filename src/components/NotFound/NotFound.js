import React from 'react';
import notfound from '../../images/notfound/404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound">
            <img src={notfound} alt=""/>
        </div>
    );
};

export default NotFound;