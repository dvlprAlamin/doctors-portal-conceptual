import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AppointmentTotal = () => {
    const [appointments, setAppointments] = useState([]);
    const { user } = useAuth()
    console.log(user)
    useEffect(() => {
        fetch(`http://localhost:5000/appointments?email=${user.email}`,
            {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('idToken')}`
                }
            })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <div>
            <h1>Appointment Total {appointments?.length}</h1>
        </div>
    );
};

export default AppointmentTotal;