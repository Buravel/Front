// import React from 'react';
import "./PostResponsive.scss";
// export default ({ children, ...rest }) => (
//     <div className="reponsive" {...rest}>
//         {children}
//     </div>
// );

import React from "react";

const PostResponsive = ({ children, ...rest }) => {
  return (
    <div className="PostResponsive" {...rest}>
      {children}
    </div>
  );
};

export default PostResponsive;
