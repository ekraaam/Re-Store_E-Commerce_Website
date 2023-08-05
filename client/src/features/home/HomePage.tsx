import { Typography } from "@mui/material";
import React from 'react';
import Catalog from "../catalog/Catalog";
export default function HomePage(){
    return(
        <Typography variant="h2">
            <Catalog />
        </Typography>
    )
}