import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chairImg from '../../../images/chair.png'
import Calendar from '../Appointments/Calendar';
const AppointmentBanner = ({ date, setDate }) => {
    const style = {
        display: 'flex',
        alignItems: 'center',
        minHeight: 500,
        height: '90vh'
    }
    return (
        <div style={style}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h4">Appointment</Typography>
                        <Calendar date={date} setDate={setDate} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img src={chairImg} width="100%" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentBanner;