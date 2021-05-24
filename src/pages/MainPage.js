import React from 'react';
import Responsive from '../components/common/Responsive';
import 'bootstrap/dist/css/bootstrap.css';
// import Contact from '../components/mainpage/Contact';
import SelectBox from '../components/mainpage/SelectBox';
import Advertise from '../components/mainpage/Advertise';
import Product from '../components/mainpage/Product';
import Mainpage_afterlogin from '../components/mainpage/Mainpage_afterlogin';
import After_topBar from '../components/mainpage/After_topBar';
import After_Topnav from '../components/mainpage/After_Topnav';
import Topbar from '../components/mainpage/Topbar';
import Footer from '../components/mainpage/Footer';
import Mainpage from '../components/mainpage/Mainpage';

const MainPage = () => {
    return (
        <div>
            <Responsive>
                <Mainpage />
            </Responsive>

            {/* <Mainpage_afterlogin /> */}
        </div>
    );
};

export default MainPage;
