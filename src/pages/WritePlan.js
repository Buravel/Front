import React from 'react';
import Responsive from '../components/common/Responsive';
import HeaderContainer from '../containers/common/HeaderContainer';
import WritePlanContainer from '../containers/write/WritePlanContainer';

const WritePlan = () => {
    return (
        <>
            <HeaderContainer />
            <Responsive>
                <WritePlanContainer />
            </Responsive>
        </>
    );
};

export default WritePlan;
