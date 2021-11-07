import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { infoData } from '../../../data/data';

const InfoCard = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    infoData.map(({ Icon, title, description, background }) => <Grid key={title} item xs={12} sm={12} md={4} lg={4}>
                        <Paper variant="outlined" sx={{ display: 'flex', justifyContent: 'space-between', background: background, color: '#fff', p: 3 }}>
                            <Icon sx={{ fontSize: 60 }} />
                            <div>
                                <Typography variant="body1">{title}</Typography>
                                <Typography variant="subtitle1">{description}</Typography>
                            </div>
                        </Paper>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default InfoCard;