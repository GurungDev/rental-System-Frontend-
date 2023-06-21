import React from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const Payments = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "customer_name",
      headerName: "Customer Name",
      flex: 1,
      cellClassName: "name-column",
    },
    {
      field: "total",
      headerName: "Total Amount",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "invoice",
      headerName: "Invoice",
      flex: 1,
    },
  ];

  const rows = [
    {
      id: "1",
      customer_name: "Nishan Gurung",
      total: "Rs 1200",
      date: "2023/2/1",
      invoice: "Invoice",
    },
    {
      id: "2",
      customer_name: "Nishan Gurung",
      total: "Rs 1200",
      date: "2023/2/1",
      invoice: "Invoice",
    },
    {
      id: "3",
      customer_name: "Nishan Gurung",
      total: "Rs 1200",
      date: "2023/2/1",
      invoice: "Invoice",
    },
  ];
  return (
    <div className="md:absolute py-20 lg:right-0 lg:py-10 w-[95%] m-auto lg:w-[80%] ">
      <Box width="100%" height="300px">
        {" "}
        <DataGrid
          className="bg-red-200 w-[100%] h-[100vh]"
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
};

export default Payments;
