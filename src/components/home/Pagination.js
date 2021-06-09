import React from 'react';
import './pagination.scss';
const Pagination = ({
    totalPages,
    totalElements,
    currentPage,
    setCurrentPage,
}) => {
    return (
        <div className="pagination-container">
            {parseInt(currentPage) !== 0 && (
                <span>
                    <img
                        src="/images/mainpage/left-arrow.png"
                        alt="left"
                        onClick={() => setCurrentPage((state) => state - 1)}
                    />
                </span>
            )}

            <span className="current">
                <b>{parseInt(currentPage) + 1}</b>
            </span>
            <span>/</span>
            <span>{parseInt(totalPages)}</span>
            {parseInt(currentPage) + 1 !== parseInt(totalPages) && (
                <span>
                    <img
                        src="/images/mainpage/right-arrow.png"
                        alt="right"
                        onClick={() =>
                            setCurrentPage((state) => parseInt(state) + 1)
                        }
                    />
                </span>
            )}
        </div>
    );
};

export default Pagination;
