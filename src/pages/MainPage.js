import React from 'react';
import Responsive from '../components/common/Responsive';

import Contact from '../components/mainpage/Contact';
import Mainpage from '../components/mainpage/Mainpage';
import Demo from '../components/mainpage/Selectbox_demo';
import SelectBox from '../components/mainpage/SelectBox';
const MainPage = () => {
    return (
        <div>
        <Responsive>
            <div>mainPage</div>
        </Responsive>

        <SelectBox/>
        </div>
    );
};

export default MainPage;
