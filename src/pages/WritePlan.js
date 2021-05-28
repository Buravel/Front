import React from 'react';
import Responsive from '../components/common/Responsive';
import HeaderContainer from '../containers/common/HeaderContainer';
import WritePlanBookmarkContainer from '../containers/write/WritePlanBookmarkContainer';
import WritePlanListContainer from '../containers/write/WritePlanListContainer';
import WritePlanTitleContainer from '../containers/write/WritePlanTitleContainer';

const WritePlan = () => {
    console.log('WritePlan page');
    return (
        <>
            <HeaderContainer />
            <Responsive>
                <WritePlanTitleContainer />
                <WritePlanListContainer />
                <WritePlanBookmarkContainer />
            </Responsive>
        </>
    );
};

export default WritePlan;
