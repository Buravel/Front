// import React from 'react';
import './responsive.scss';
// export default ({ children, ...rest }) => (
//     <div className="reponsive" {...rest}>
//         {children}
//     </div>
// );

import React from 'react';

const Responsive = ({ children, ...rest }) => {
    return (
        <div className="reponsive" {...rest}>
            {children}
        </div>
    );
};

export default Responsive;
