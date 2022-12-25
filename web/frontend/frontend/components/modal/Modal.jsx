import { useState, useCallback } from "react";
import ReferralForm from "../referrals/form/ReferralForm";
import "../modal/modal.css";
import { AiOutlineClose } from "react-icons/ai";
import DataTable from "react-data-table-component";
import { modalColumns, referralRows } from "../referrals/dummyData";
import Table from "../referrals/table/Table";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: "700px",
  border: "1px solid #95A5A6",
  boxShadow: 24,
  backgroundColor: "white",
  borderRadius: "15px",
  borderTop: "none",
  p: 4,
};

const customStyles = {
  headCells: {
    style: {
      fontSize: "17px",
      fontWeight: "bold",
      paddingLeft: "0 5px",
      justifyContent: "center",
      backgroundColor: "#FCFCFC",
    },
  },
  cells: {
    style: {
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: "none",
    },
  },
  rows: {
    style: {
      backgroundColor: "#ECECEC",
      textAlign: "center",
    },
  },
};

const ShowModal = ({ openModal, setOpenModal, values }) => {
  const handleClose = () => {
    // console.log("Clicked", openModal);
    setOpenModal((prev) => !prev);
    document.body.style.overflow = "unset";
  };

  let newData = [{ ...values, date: "2022/12/12" }];
  // console.log(newData);
  return openModal ? (
    <div style={{ height: "500px" }}>
      <div className="modal_container">
        <nav className="modal__nav">
          <h6>Reference Details</h6>
          <p className="referral__id">ID: {values?.id}</p>
        </nav>
        <section className="modal__body">
          <p>Email: {values?.referral_email}</p>
          <p>Referral Link: {values?.referral_code}</p>
          <p>Friends Joined: {values?.friends_joined}</p>

          <div className="referral_detail-table">
            <div style={{ maxHeight: "200px" }}>
              <DataTable
                customStyles={customStyles}
                data={newData}
                columns={modalColumns}
              />
            </div>
          </div>
        </section>

        <button className="btn__close" onClick={handleClose}>
          CLOSE
        </button>
      </div>
    </div>
  ) : null;
};

export default ShowModal;
