import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Navigation from '../../Home/Navigation/Navigaton';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Booking from '../Booking/Booking';

const Appointments = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Navigation />
            <AppointmentBanner date={date} setDate={setDate} />
            <Booking date={date} />
            <Footer />
        </div>
    );
};

export default Appointments;