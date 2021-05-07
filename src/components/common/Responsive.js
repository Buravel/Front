import React from 'react';
import './responsive.scss';
export default ({ children, ...rest }) => (
    <div className="reponsive" {...rest}>
        {children}
    </div>
);
