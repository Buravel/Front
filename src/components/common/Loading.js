import React from 'react';
import './loading.scss';
const Loading = ({ children }) => {
    return (
        <div className="loading-container">
            <img src="./icon.png" alt="logo" />
            <p>{children}</p>
        </div>
    );
};

export default Loading;
