import React /* useState, map*/ from 'react';
import './After_topBar.scss';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <span className="footer_icon">
                    <img
                        src="/images/mainpage/footer_icon.png"
                        srcset="img/food@2x.png 2x,img/food@3x.png 3x"
                        class="footer_icon"
                        alt="footer"
                    />
                </span>
                <span className="footer_text1">이용약관</span>
                <span className="footer_text2">개인정보 처리방침</span>
                <span className="footer_text3">고객센터</span>
                <span className="footer_text4">
                    © 2021 buravel, Inc. All rights reserved.
                </span>
            </div>
        </>
    );
};
export default Footer;
