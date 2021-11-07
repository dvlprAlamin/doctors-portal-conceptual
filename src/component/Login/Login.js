import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import loginBg from '../../images/Group 140.png';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MuiButton from '../../StyledComponent/MuiButton';
import useAuth from '../../hooks/useAuth'
const Login = () => {
    const history = useHistory();
    const { state, pathname } = useLocation();
    const { googleSignIn } = useAuth()
    const handlerGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res);
            })
    }

    return (
        <>
            <Container style={{ marginTop: 80 }}>
                <Grid container spacing={4}>
                    <Grid item sm={12} md={6} lg={6} style={{ minHeight: 600, display: 'flex', alignItems: 'center' }}>
                        <Paper variant="outlined" style={{ padding: 20, textAlign: 'center' }}>
                            <Typography color="primary" variant="h6" textAlign="center">Login</Typography>
                            <form>
                                {
                                    pathname === '/signup' &&
                                    <TextField
                                        label="Name"
                                        fullWidth
                                        margin="normal"
                                        name="name"
                                        type="text"
                                    />}
                                <TextField
                                    label="Email"
                                    fullWidth
                                    margin="normal"
                                    name="email"
                                    type="email"
                                />
                                <TextField
                                    label="Password"
                                    fullWidth
                                    margin="normal"
                                    name="password"
                                    type="password"
                                />
                                {pathname === '/signup' ?
                                    <Typography variant="body1">Already have an account? <Link to="/login">Login</Link> </Typography> :
                                    <Typography variant="body1">Need an account? <Link to="/signup">Sign up</Link> </Typography>}
                                <MuiButton variant="contained" type="submit" fullWidth style={{ marginTop: 15 }}>{pathname === '/signup' ? 'Sign up' : 'Login'}</MuiButton>
                            </form>
                            <Typography variant="h5" margin="10px 0">Or Signin with</Typography>
                            <Button variant="outlined" onClick={handlerGoogleSignIn} >Google</Button>
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6}>
                        <img width="100%" src={loginBg} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;