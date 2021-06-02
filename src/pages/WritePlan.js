import React from 'react';
import Responsive from '../components/common/Responsive';
import HeaderContainer from '../containers/common/HeaderContainer';
import WritePlanListContainer from '../containers/write/WritePlanListContainer';
import WritePlanTitleContainer from '../containers/write/WritePlanTitleContainer';

const WritePlan = () => {
    return (
        <>
            <HeaderContainer />
            <Responsive>
                <WritePlanTitleContainer />
                <WritePlanListContainer />
                {/* <WritePlanBookmarkContainer /> */}
            </Responsive>
        </>
    );
};

export default WritePlan;
