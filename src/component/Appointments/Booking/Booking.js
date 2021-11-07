import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { bookings } from '../../../data/data';
import BookingSingle from './BookingSingle';

const Booking = ({ date }) => {

    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#19D3AE', textAlign: 'center', mb: 3 }}>Available Appointment on {new Date(date).toDateString()} </Typography>
            <Grid container spacing={3}>
                {
                    bookings.map((booking) => <BookingSingle date={date} booking={booking} />)
                }
            </Grid>

        </Container>
    );
};

export default Booking;