import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import HomeContainer from '../containers/home/HomeContainer';
import Responsive from '../components/common/Responsive';

const HomePage = (props) => {
    return (
        <>
            <HeaderContainer />
            <Responsive>
                <HomeContainer />
            </Responsive>
        </>
    );
};

export default HomePage;
