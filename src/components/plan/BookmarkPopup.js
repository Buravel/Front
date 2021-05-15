import React from "react";
function BookmarkPopup(props) {
  return (
    <div className="popupBackground">
      <div className="popupBox">
        <div className="popupPicture"></div>
        <img
          src="/images/planImg/exit.svg"
          className="exit"
          onClick={props.handleClose}
        />
        <img
          src="/images/planImg/exit.svg"
          className="exit"
          onClick={props.handleClose}
        />
      </div>
    </div>
  );
}
export default BookmarkPopup;
