import "./ReferralsBlock.css";
import * as React from "react";
import { referralRows, referralColumns } from "./dummyData";
import { BiShow } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import ShowModal from "../modal/Modal";
import DataTable from "react-data-table-component";
import DeleteModal from "../modal/DeleteModal";

const customStyles = {
  headCells: {
    style: {
      fontSize: "20px",
      fontWeight: "bold",
      paddingLeft: "0 8px",
      justifyContent: "center",
      backgroundColor: "#FCFCFC",
    },
  },
  cells: {
    style: {
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderLeft: "1px solid #000",
    },
  },
  rows: {
    style: {
      backgroundColor: "#ECECEC",
      textAlign: "center",
    },
  },
};

const ReferralsBlock = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [modalData, setModalData] = React.useState();
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [data, setData] = React.useState(referralRows);

  const handleDelete = (id) => {
    let delVal = data.filter((item) => item.id !== id);
    setData(delVal);
    console.log(delVal);
  };

  /*  React.useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
      document.body.style.opacity = 0;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.opacity = 1;
    }
  }, [openModal]); */

  // Actions column on table
  const actionColumns = [
    {
      name: "Details",
      selector: "details",
      id: "details",
      cell: (row) => {
        return (
          <div className="cellAction">
            <div
              className="actionbtn"
              onClick={(e) => {
                setOpenModal(true);
                setModalData(row);
                document.body.style.overflow = "hidden";
              }}
            >
              <BiShow />
            </div>
            <div className="deletebtn">
              <RiDeleteBin6Line
                onClick={(e) => {
                  setDeleteModal(true);
                  setModalData(row.id);
                }}
              />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className="datatable">
        <DataTable
          customStyles={customStyles}
          columns={referralColumns.concat(actionColumns)}
          data={data}
          pagination
          highlightOnHover
        />
      </div>

      <div style={{ borderRadius: "15px" }}>
        <ShowModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          values={modalData}
        />
      </div>

      <div>
        <DeleteModal
          values={modalData}
          openModal={deleteModal}
          setDeleteModal={setDeleteModal}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default ReferralsBlock;
