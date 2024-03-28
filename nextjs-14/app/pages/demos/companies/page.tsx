"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CompaniesRows from '@/app/organisms/rows/companies-rows';

const Company = (props: ICompany) => {
  return (
    <tr>
      <td>{props.company}</td>
      <td>{props.contact}</td>
      <td>{props.country}</td>
    </tr>
  );
};

const columns: GridColDef[] = [
  { field: "company", headerName: "Company", width: 200 },
  { field: "contact", headerName: "Contact", width: 200 },
  { field: "country", headerName: "Country", width: 200 },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={CompaniesRows()}
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
  );
}