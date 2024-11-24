import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import { TbUserCircle } from "react-icons/tb";

const columns = (handleStatusChange) => [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "firstName",
    headerName: "First Name",
    width: 150,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <TbUserCircle style={{ marginRight: "8px", width:"20%" ,height:"20%",color:"purple"}} />
        {params.value}
      </div>
    ),
  },
  { field: "Phone", headerName: "Phone", width: 130 },
  { field: "location", headerName: "Location", width: 130 },
  { field: "Mail", headerName: "Mail", width: 130 },
  {
    field: "status",
    headerName: "Status",
    width: 180,
    renderCell: (params) => {
      const isActive = params.row.status === "active";

      return (
        <Button
          variant="contained"
          style={{
            color: isActive ? "green" : "gray",
            backgroundColor: isActive ? "#d9f9c9" : "#e8e8e8", 
            width: "60%",
          }}
        >
          {isActive ? "Active" : "Inactive"}
        </Button>
      );
    },
  },
  {
    field: "statusSwitch",
    headerName: " ",
    width: 180,
    renderCell: (params) => {
      const handleSwitchChange = (event) => {
        handleStatusChange(params.row.id, event.target.checked ? "active" : "inactive");
      };

      return (
        <Switch
          checked={params.row.status === "active"}
          onChange={handleSwitchChange}
          inputProps={{ "aria-label": "Switch demo" }}
        />
      );
    },
  },
];

export default function Table() {
  const [rows, setRows] = React.useState([
    { id: 1, Phone: "+2011111111", firstName: "Nada", location: "EG", Mail: "nada@gmail.com", status: "active" },
    { id: 2, Phone: "+2011111111", firstName: "Nada", location: "EG", Mail: "nada@gmail.com", status: "inactive" },
    { id: 3, Phone: "+2011111111", firstName: "Nada", location: "EG", Mail: "nada@gmail.com", status: "active" },
    { id: 4, Phone: "+2011111111", firstName: "Nada", location: "EG", Mail: "nada@gmail.com", status: "inactive" },
    { id: 5, Phone: "+2011111111", firstName: "Nada", location: "EG", Mail: "nada@gmail.com", status: "active" },
    { id: 6, Phone: "+2011111111", firstName: "Nada", location: "EG", Mail: "nada@gmail.com", status: "inactive" },
    { id: 7, Phone: "+2011111111", firstName: "Nada", location: "EG", Mail: "nada@gmail.com", status: "active" },
    { id: 8, Phone: "+2011111111", firstName: "Nada", location: "EG", Mail: "nada@gmail.com", status: "inactive" },
    { id: 9, Phone: "+2011111111", firstName: "Nada", location: "EG", Mail: "nada@gmail.com", status: "active" },
    { id: 10, Phone: "+2011111111", firstName: "Nada", location: "EG", Mail: "nada@gmail.com", status: "inactive" },
    { id: 11, Phone: "+2011111111", firstName: "Nada", location: "EG", Mail: "nada@gmail.com", status: "active" },
    { id: 12, Phone: "+2011111111", firstName: "Nada", location: "EG", Mail: "nada@gmail.com", status: "inactive" },
   
  ]);

  const handleStatusChange = (id, newStatus) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, status: newStatus } : row))
    );
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            backgroundColor: "#2d3748",
            color: "#fff",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns(handleStatusChange)}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </ThemeProvider>
  );
}
