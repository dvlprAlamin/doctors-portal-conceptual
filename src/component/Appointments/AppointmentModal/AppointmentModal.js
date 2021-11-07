import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import MuiButton from '../../../StyledComponent/MuiButton';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function AppointmentModal({ date, open, handleClose, name, time }) {
    const [formData, setFormData] = useState({});
    const handleChange = e => {
        const newDate = date.toLocaleDateString()
        const newData = { ...formData, newDate, time };
        newData[e.target.name] = e.target.value;
        setFormData(newData);
    }
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(formData);
        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            size="small"
                            value={time}
                            margin="dense"
                        />
                        <TextField
                            margin="dense"
                            fullWidth
                            size="small"
                            placeholder="Name"
                            name="name"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            fullWidth
                            size="small"
                            name="phone"
                            placeholder="Phone Number"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            fullWidth
                            size="small"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            fullWidth
                            size="small"
                            value={new Date(date).toDateString()}
                        />
                        <MuiButton variant="contained" type="submit" sx={{ mt: 1 }}>Submit</MuiButton>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}