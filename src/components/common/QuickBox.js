import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { initialize } from '../../modules/auth';
import './quickBox.scss';
const QuickBox = ({ onLogout, onClick, profileImage }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const onClickLogout = () => {
        onClick();
        onLogout();
        dispatch(initialize());
        history.push('/');
    };
    return (
        <div className="quick-menu">
            <div className="close-btn">
                <span onClick={onClick}>×</span>
            </div>
            <div className="quick-btn">
                <Link to="/mypage">
                    <div className="icon">
                        <img
                            src={
                                profileImage
                                    ? `data:image/png;base64,${profileImage}`
                                    : '/images/header/default_profile.png'
                            }
                            style={{
                                maxWidth: '70%',
                                maxHeight: '70%',
                            }}
                            alt="mypage"
                        />
                    </div>
                    <span>마이페이지</span>
                </Link>
            </div>
            <div className="quick-btn">
                <Link to="/">
                    <div>
                        <img src="/images/header/home.png" alt="" />
                    </div>
                    <span>메인페이지</span>
                </Link>
            </div>
            <div className="quick-btn">
                <Link to="/writeplan">
                    <div>
                        <img src="/images/header/add_plan.png" alt="newplan" />
                    </div>
                    <span>새 여행 작성</span>
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
            <div className="logout-btn" onClick={onClickLogout}>
                로그아웃
            </div>
        </div>
    );
};

export default React.memo(QuickBox);
