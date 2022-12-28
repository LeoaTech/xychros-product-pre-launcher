import React from "react";
import DataTable from "react-data-table-component";

const Table = ({ modalColums, values }) => {
  return (
    <div>
      <DataTable columns={modalColums} data={values} />
    </div>
  );
};

export default Table;
