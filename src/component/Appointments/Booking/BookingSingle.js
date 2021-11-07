import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import MuiButton from '../../../StyledComponent/MuiButton';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const BookingSingle = ({ booking, date }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { id, name, time, space } = booking
    return (
        <Grid key={id} item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, textAlign: 'center' }} variant="outlined">
                <Typography variant="h5" color="#19D3AE">{name}</Typography>
                <Typography variant="h6" >{time}</Typography>
                <Typography variant="subtitle" sx={{ display: 'block', my: 2 }} >{space} Spaces Available</Typography>
                <MuiButton variant="contained" onClick={handleOpen}>Book Appointment</MuiButton>
                <AppointmentModal date={date} time={time} name={name} handleClose={handleClose} open={open} />
            </Paper>
        </Grid>
    );
};

export default BookingSingle;