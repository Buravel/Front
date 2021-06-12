import React from 'react';
import Responsive from '../components/common/Responsive';
import HeaderContainer from '../containers/common/HeaderContainer';
import SearchContainer from '../containers/home/SearchContainer';

const SearchPage = () => {
    return (
        <>
            <HeaderContainer />
            <Responsive>
                <SearchContainer />
            </Responsive>
        </>
    );
};

export default SearchPage;
