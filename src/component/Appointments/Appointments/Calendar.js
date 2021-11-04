import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';

export default function Calendar({ date, setDate }) {


    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
        </LocalizationProvider>
    );
}