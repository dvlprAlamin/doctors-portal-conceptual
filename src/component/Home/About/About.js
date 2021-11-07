import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatmentImg from '../../../images/treatment.png'
import MuiButton from '../../../StyledComponent/MuiButton'
const About = () => {
    return (
        <Container id="about" sx={{ pt: 5 }}>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <img src={treatmentImg} alt="" width="100%" />
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <Typography variant="h4" fontWeight={500}>Exponetional Dental Care, on your Term</Typography>
                    <Typography variant="body1" style={{ margin: '20px 0', lineHeight: 2.2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                    </Typography>
                    <MuiButton variant="contained">Learn More</MuiButton>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;