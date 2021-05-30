import React, { useState, map, useEffect  } from 'react'
import './After_topBar.scss'
import SelectBox from './SelectBox';

const After_topBar = (props) => {
    const length = props.product; //최신 작성글 개수

    if (!props.product) return null;
    return ( 
        <>
        <div className="tobar">
            <span className = "atopbar-title">최신작성글({length})</span>
            <span className="aproduct-topbar"><SelectBox/></span>
        </div>
        </>
    );
}
export default After_topBar;
