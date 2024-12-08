import React, { useState, useEffect } from "react";
import "./PopUp3.css";

const Popup3 = () => {
  const [showpopup3, setShowpopup3] = useState(false);

  useEffect(() => {
    // Gắn sự kiện click cho nút "delete-button" có sẵn
    const deleteButton = document.querySelector(".edit-button");
    if (deleteButton) {
      deleteButton.addEventListener("click", handleDeleteClick);
    }

    // Cleanup sự kiện khi component unmount
    return () => {
      if (deleteButton) {
        deleteButton.removeEventListener("click", handleDeleteClick);
      }
    };
  }, []);

  const handleDeleteClick = () => {
    setShowpopup3(true);
  };

  const handleCancel = () => {
    setShowpopup3(false);
  };

  const handleConfirm = () => {
    console.log("Confirmed deletion");
    setShowpopup3(false);
  };

  return (
    <>
      {showpopup3 && (
        <div className="popup3-overlay">
          <div className="popup3-container">
            <h2>Xoá Khách hàng</h2>
            <p>Xác nhận Xoá Khách hàng đã chọn?</p>
            <div className="popup3-actions">
              <button className="cancel-button" onClick={handleCancel}>
                Huỷ
              </button>
              <button className="confirm-button" onClick={handleConfirm}>
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup3;
