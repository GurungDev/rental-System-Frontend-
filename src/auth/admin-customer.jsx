import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import getAllUser from "../service/user/getAllUser";
import postDeleteUser from "../service/user/postDeleteUser";
import { toast } from "react-hot-toast";

const Customer = () => {
  const [rows, setRows] = useState([]);
  const [rowId, setRowId] = useState(null);
  const [rowChanged, setChanged] = useState(false);
  useEffect(() => {
    async function getRows() {
      let row = await getAllUser();
      const updatedRow = row.map((e, index) => {
        return { ...e, id: index + 1 };
      });
      setRows(updatedRow);
    }

    getRows();
  }, [rowChanged]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5, maxWidth: 90 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      maxWidth: 250,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 150,
      maxWidth: 250,
    },

    {
      field: "contact",
      headerName: "Contact No",
      type: "number",
      flex: 1,
      headerAlign: "left",
      align: "left",
      minWidth: 150,
      maxWidth: 200,
    },
    {
      field: "actions",
      headerName: "",
      type: "actions",
      renderCell: (params) => {
        const data = params.id;
        const deleteUser = async () => {
          try {
            const user = await postDeleteUser({ data });
            setChanged(!rowChanged);
            toast.success("User Deleted");
          } catch (error) {
            toast.error("Error");
          }
        };
        return (
          <Box
            onClick={() => {
              deleteUser();
            }}
            className="btn bg-blue-600 text-white py-2 px-5 rounded"
          >
            Delete
          </Box>
        );
      },
    },
  ];

  return (
    <div className="md:absolute   m-0 mx-auto py-20 lg:right-0 lg:py-7 w-[95%] m-auto lg:w-[75%] ">
      <div className=" w-[80%] m-auto">
        <div className="m-0 m-auto border-b-2">
          <h1 className="text-[1.5rem] text-neutral-800">User Details</h1>
          <h2 className="text-[.8rem] pb-6 text-neutral-600">
            List of all the User
          </h2>
        </div>
        <div className="m-initial">
          {" "}
          <Box
            className="h-[70vh] lg:h-[80vh]"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell:focus": {
                outline: "none",
              },
              "& .MuiDataGrid-cell": {
                outline: "none",
                borderBottom: "1px solid grey",
              },

              "& .MuiDataGrid-columnHeaders": {
                borderBottom: "1px solid grey",
                backgroundColor: "rgb(30 64 175)",
                color: "white",
                fontSize: 16,
              },
              "& .MuiDataGrid-virtualScroller": {},
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
              },

              "& .MuiDataGrid-virtualScrollerRenderZone": {
                "& .MuiDataGrid-row": {
                  "&:nth-child(2n)": {
                    backgroundColor: "rgb(239 246 255)",
                  },
                },
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              getRowId={(row) => row._id}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Customer;
