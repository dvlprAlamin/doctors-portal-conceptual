import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

export default function Navigation() {
    const { user, logout } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Link to="/">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/appointments">
                        <Button color="inherit">Appointments</Button>
                    </Link>
                    <Link to="/dashboard">
                        <Button color="inherit">Dashboard</Button>
                    </Link>
                    {
                        user?.email ?
                            <Button onClick={logout} variant="contained"> Logout</Button> :
                            <Link to="/login">
                                <Button color="inherit">Login</Button>
                            </Link>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}