import React from 'react';
import Responsive from '../components/common/Responsive';

import Contact from '../components/mainpage/Contact';
import Mainpage from '../components/mainpage/Mainpage';
import Demo from '../components/mainpage/Selectbox_demo';

const MainPage = () => {
    return (
        <div>
        <Responsive>
            <div>mainPage</div>
        </Responsive>

        <Demo/>
        </div>
    );
};

export default MainPage;
