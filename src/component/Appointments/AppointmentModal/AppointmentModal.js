import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

    const handleSubmit = e => {
        e.preventDefault();
        alert('Ok')
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
                        />
                        <TextField
                            margin="dense"
                            fullWidth
                            size="small"
                            placeholder="Phone Number"
                        />
                        <TextField
                            margin="dense"
                            fullWidth
                            size="small"
                            placeholder="Email"
                        />
                        <TextField
                            margin="dense"
                            fullWidth
                            size="small"
                            value={new Date(date).toDateString()}
                        />
                        <MuiButton type="submit">Submit</MuiButton>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}