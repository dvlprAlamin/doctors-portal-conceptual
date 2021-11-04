import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { bookings } from '../../../data/data';
import MuiButton from '../../../StyledComponent/MuiButton';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const Booking = ({ date }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#19D3AE', textAlign: 'center', mb: 3 }}>Available Appointment on {new Date(date).toDateString()} </Typography>
            <Grid container spacing={3}>
                {
                    bookings.map(({ id, name, time, space }) => <Grid key={id} item xs={12} sm={6} md={4}>
                        <Paper sx={{ p: 2, textAlign: 'center' }} variant="outlined">
                            <Typography variant="h5" color="#19D3AE">{name}</Typography>
                            <Typography variant="h6" >{time}</Typography>
                            <Typography variant="subtitle" sx={{ display: 'block', my: 2 }} >{space} Spaces Available</Typography>
                            <MuiButton onClick={handleOpen}>Book Appointment</MuiButton>
                            <AppointmentModal date={date} time={time} name={name} handleClose={handleClose} open={open} />
                        </Paper>
                    </Grid>)
                }
            </Grid>

        </Container>
    );
};

export default Booking;