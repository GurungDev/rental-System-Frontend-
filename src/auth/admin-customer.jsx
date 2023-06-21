import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import { Navbar } from "../component/component";

const Customer = () => {
  const theme = useTheme();

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <div className="md:absolute py-20 lg:right-0 lg:py-10 w-[95%] m-auto lg:w-[80%] ">
      <div className="flex w-full">
        <div className="h-full "></div>
        <div className="h-[100vh] w-full  overflow-y-auto">
          <div className=" w-[80%] m-auto py-10">
            <div className="text-[1.5rem]">Customer Details</div>
            <div>
              {" "}
              <Box sx={{ height: "80vh", width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                  checkboxSelection
                  disableRowSelectionOnClick
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
