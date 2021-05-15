import React from 'react';
import Responsive from '../components/common/Responsive';

import Contact from '../components/mainpage/Contact';
import Mainpage from '../components/mainpage/Mainpage';

const MainPage = () => {
    return (
        <div>
        <Responsive>
            <div>mainPage</div>
        </Responsive>

        <Contact/>
        </div>
    );
};

export default MainPage;
