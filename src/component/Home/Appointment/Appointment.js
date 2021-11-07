import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import doctorImg from '../../../images/doctor.png'
import MuiButton from '../../../StyledComponent/MuiButton';
import bg from '../../../images/appointmentbg.png'
const Appointment = () => {
    const useStyle = makeStyles({
        root: {
            background: `url(${bg}), linear-gradient(#3A4256,#3A4256)`,
            backgroundBlendMode: 'overlay',
            backgroundRepeat: 'no-repeat',
            height: 380,
            display: 'flex',
            alignItems: 'center',
            marginBottom: 200,
            marginTop: 200
        }
    })
    const { root } = useStyle()
    return (
        <div className={root}>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <img src={doctorImg} alt="" width="100%" style={{ marginTop: -84 }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7} >
                        <Typography variant="h6" color="#19D3AE">Appointment</Typography>
                        <Typography variant="h4" color="#fff">Make an Appointment today</Typography>
                        <Typography variant="body1" sx={{ my: 3, color: '#fff' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laudantium consequatur? Explicabo neque quod ea. </Typography>
                        <MuiButton variant="contained">Learn more</MuiButton>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Appointment;