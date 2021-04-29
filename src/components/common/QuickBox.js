import React from 'react';
import './quickBox.scss';
const QuickBox = () => {
    return (
        <div className="quick-menu">
            <div className="close-btn">X</div>
            <div className="quick-btn">
                <div>
                    <img />
                </div>
                <span>마이페이지</span>
            </div>
            <div className="quick-btn">
                <div>
                    <img />
                </div>
                <span>새 여행 작성</span>
            </div>
            <div className="quick-btn">
                <div>
                    <img />
                </div>
                <span>내 여행</span>
            </div>
            <div className="quick-btn">
                <div>
                    <img />
                </div>
                <span>북마크</span>
            </div>
            <div className="quick-btn">
                <div>
                    <img />
                </div>
                <span>설정</span>
            </div>
            <div className="quick-btn">
                <div>
                    <img />
                </div>
                <span>문의</span>
            </div>
        </div>
    );
};

export default QuickBox;
