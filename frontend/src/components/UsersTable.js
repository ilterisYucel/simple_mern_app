import React, {useState, useEffect} from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import constants from "../helpers/constants";
import axios from "axios";

export const CustomPagination = () => {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            color="primary"
            count={pageCount}
            page={page + 1}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    );
}

const columns = [
    { field: "id", headerName: "ID", hide: true },
    {
        field: "name",
        headerName: "NAME",
        minWidth: 150,
    },
    {
        field: "phone",
        headerName: "PHONE",
        minWidth: 200,
        flex: 1,
    },
    {
        field: "email",
        headerName: "EMAIL",
        minWidth: 300,
        flex: 1,
    },
    {
        field: "country",
        headerName: "COUNTRY",
        width: 100,
        flex: 1,
    },    {
        field: "currency",
        headerName: "CURRENCY",
        width: 100,
        flex: 1
    }
];
const UsersTable = () => {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        axios.get(`${constants.urls.API_URL}/api/users`)
            .then(response => {
                setRows(response.data.data);
            })
            .catch(err => {
                console.error('Data is not get');
            })
    }, []);
    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                autoHeight
                rows={rows}
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
                localeText={{
                    footerRowSelected: CustomPagination
                }}
                components={{
                    Pagination: CustomPagination
                }}
            />
        </div>
    );
}

export default UsersTable;