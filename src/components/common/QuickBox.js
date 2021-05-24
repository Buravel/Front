import React from 'react';
import { Link } from 'react-router-dom';
import './quickBox.scss';
const QuickBox = () => {
    return (
        <div className="quick-menu">
            <div className="close-btn">
                <span>×</span>
            </div>
            <div className="quick-btn">
                <Link to="/mypage">
                    <div className="icon">
                        <img
                            src="/images/header/default_profile.png"
                            alt="mypage"
                        />
                    </div>
                    <span>마이페이지</span>
                </Link>
            </div>
            <div className="quick-btn">
                <Link to="writeplan">
                    <div>
                        <img src="/images/header/add_plan.png" alt="newplan" />
                    </div>
                    <span>새 여행 작성</span>
                </Link>
            </div>
            <div className="quick-btn">
                <Link to="/mypage">
                    <div>
                        <img alt="" />
                    </div>
                    <span>내 여행</span>
                </Link>
            </div>
            <div className="quick-btn">
                <Link to="/bookmarks">
                    <div>
                        <img src="/images/header/bookmark.png" alt="" />
                    </div>
                    <span>북마크</span>
                </Link>
            </div>
            <div className="quick-btn">
                <div>
                    <img src="/images/header/setup.png" alt="" />
                </div>
                <span>설정</span>
            </div>
            <div className="quick-btn">
                <div>
                    <img src="/images/header/qa.png" alt="" />
                </div>
                <span>문의</span>
            </div>
        </div>
    );
};

export default React.memo(QuickBox);
