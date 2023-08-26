import React from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';

const pocker = { textAlign: 'left', width: '40px', height: '60px' }
const app_container = {
    backgroundColor: 'rgb(17,24,39)',
    color: 'white',
    height: '100vh',
}
export default function FAQ() {
    return (
        <div style={app_container}>
            <Grid container sx={{ width: '100%', height: '48vw', pb: 10, pt: 1, px: 3, textAlign: 'left' }}>
                <Link href="/">
                    <img src='assets/pockerfaq.png' style={pocker} />
                </Link>
                <Typography variant='h5' sx={{ margin: 'auto', mt: 5, textAlign: 'center' }}>
                    FREQUENTLY ASKED QUESTIONS
                </Typography>
                <Grid container sx={{
                    mx: useMediaQuery('(min-width:800px)') ? 20 : 5, "&::-webkit-scrollbar": {
                        width: 10,
                        display: 'none'
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "transparent"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#aaa",
                        borderRadius: 2
                    }, overflowY: 'auto', height: '410px', mt: 5
                }}>
                    <Grid sm={12} xs={12} sx={{ mt: 5 }}>
                        <Typography variant='h6' sx={{ color: ' rgb(97, 218, 251)' }}>
                            Q:When do I get paid?
                        </Typography>
                        <Typography variant='h6'>
                            A:Wager winners will be paid within 24 hours of the event,
                            game or conclusion ending
                        </Typography>
                    </Grid>
                    <Grid sm={12} xs={12} sx={{ mt: 5 }}>
                        <Typography variant='h6' sx={{ color: ' rgb(97, 218, 251)' }}>
                            Q:Why do I only see one team or person listed?
                        </Typography>
                        <Typography variant='h6'>
                            A:We only list one of the opponents on the bet
                        </Typography>
                    </Grid>
                    <Grid sm={12} xs={12} sx={{ mt: 5 }}>
                        <Typography variant='h6' sx={{ color: 'rgb(97, 218, 251)' }}>
                            Q:What if no one takes my bed?
                        </Typography>
                        <Typography variant='h6'>
                            A: Then you will be refunded within 24 hours of the event
                        </Typography>
                    </Grid>
                    <Grid sm={12} xs={12} sx={{ mt: 5 }}>
                        <Typography variant='h6' sx={{ color: 'rgb(97, 218, 251)' }}>
                            Q:What if no one takes my bed?
                        </Typography>
                        <Typography variant='h6'>
                            A: Then you will be refunded within 24 hours of the event
                        </Typography>
                    </Grid>
                    <Grid sm={12} xs={12} sx={{ mt: 5 }}>
                        <Typography variant='h6' sx={{ color: 'rgb(97, 218, 251)' }}>
                            Q:What if no one takes my bed?
                        </Typography>
                        <Typography variant='h6'>
                            A: Then you will be refunded within 24 hours of the event
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}