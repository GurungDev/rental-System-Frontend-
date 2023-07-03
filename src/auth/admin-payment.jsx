import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import getAllRental from "../service/rental/getAllRental";
import postDeleteRental from "../service/rental/postDeleteRental";
import { toast } from "react-hot-toast";

const Payments = () => {
  const [rows, setRows] = useState([]);

  const [rowChanged, setChanged] = useState(false);
  useEffect(() => {
    async function getRows() {
      let row = await getAllRental();

      const updatedRow = row.map((e, index) => {
        const date = e?.rentalId?.selected_pick_up_date;
        const newDate = new Date(date);
        const formattedDate = newDate.toISOString().split("T")[0];

        return {
          id: index + 1,
          rentalId: e?.rentalId._id,
          customer: e.userId?.name || "Deleted",
          location: e?.rentalId?.selected_pick_up_location,
          date: formattedDate,
          total_price: e?.rentalId?.payment,
          quantity: e?.rentalId.quantity,
          _id: e?._id,
          listingName: e?.listingId?.name,
        };
      });

      setRows(updatedRow);
    }
    getRows();
  }, [rowChanged]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5, maxWidth: 60 },
    {
      field: "customer",
      headerName: "Customer Name",
      flex: 1,
      minWidth: 150,
      maxWidth: 160,
    },
    {
      field: "listingName",
      headerName: "listing",
      flex: 1,
      minWidth: 110,
      maxWidth: 120,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      minWidth: 130,
      maxWidth: 140,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
      minWidth: 140,
      maxWidth: 150,
    },
    {
      field: "total_price",
      headerName: "Amount",
      type: "number",
      flex: 1,
      minWidth: 100,
      maxWidth: 120,
      headerAlign: "left",
      align: "left",
    },

    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      flex: 1,
      minWidth: 70,
      maxWidth: 80,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "actions",
      headerName: "",

      type: "actions",

      renderCell: (params) => {
        const rentalDetailsId = params?.id;
        const rentalId = params?.row?.rentalId;
        const deleteUser = async () => {
          try {
            const user = await postDeleteRental({
              data: { rentalId, rentalDetailsId },
            });
            if (!user) {
              throw new Error("");
            }
            setChanged(!rowChanged);
            toast.success("Rental Deleted");
          } catch (error) {
            toast.error("Couldn't Delete");
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
    <div className="md:absolute py-20 lg:right-0 lg:py-7 w-[95%] m-auto lg:w-[75%] ">
      <div className=" w-[80%] m-auto">
        <div className="m-0 m-auto border-b-2">
          <h1 className="text-[1.5rem] text-neutral-800">Payment Details</h1>
          <h2 className="text-[.8rem] pb-6 text-neutral-600">
            List of all the Payment
          </h2>
        </div>
        <div className=" ">
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

export default Payments;
