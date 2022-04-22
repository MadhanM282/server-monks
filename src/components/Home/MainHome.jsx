import * as React from 'react';
import Box from '@mui/material/Box';
import ResponsiveAppBar from "../Navbar/Navbar";
import { Home } from "./home";
export const MainHome = () => {
    return (
        <Box>
            <ResponsiveAppBar />
            <Home/>
        </Box>
    )
}