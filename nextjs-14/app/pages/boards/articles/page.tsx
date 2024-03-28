'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useRouter } from "next/navigation"
import { Box, Button, Input } from "@mui/material";
const SERVER = 'http://localhost:8080'

interface IArticle {
    id: number,
    title: string,
    content: string,
    writer: string
    registerDate: string
}
const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

export default function Articles() {
    const router = useRouter();
    const [articles, setArticles] = useState([])

    const url = `${SERVER}/api/articles`
    const config = {
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            Authorization: `Bearer blah ~`,
            "Access-Control-Allow-Origin": "*",
        }
    }
    useEffect(() => {
        axios.get(url, config)
            .then(res => {
                const message = res.data.message
                console.log((message))
                if (message === 'SUCCESS') {
                    console.log('게시글이 있습니다.');
                    const arr = res.data.result

                    for (let i of arr) {
                        console.log(i)
                    }
                    setArticles(res.data.result)
                    
                } else if (message === 'FAIL') {
                    console.log("게시글이 없습니다.");
                } else {
                    console.log("지정되지 않은 값");
                }

            })
    }, [])

    return (<>

        <h2>게시글 목록</h2>
        <Box sx={{ height: 400, width: '100%' }}>
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
    </>)
}