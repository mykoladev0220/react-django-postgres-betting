import React, { useState } from 'react';
import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import UploadIcon from '@mui/icons-material/Upload';
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Box, useMediaQuery } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
    },
});
const topbutton = {
    position: 'absolute',
    top: '10px',
    right: '20px',
    backgroundColor: 'transparent',
    border: '1px solid white',
    color: 'rgb(245,245,246)',
    transform: 'skew(-30deg)',
}

const stylefield = {
    width: "50%"
}
const Styledcheckbox = styled(Checkbox)(({ theme }) => ({
    color: 'rgba(97, 94, 91, 1)',

    '&.Mui-checked': {
        color: '',
    },
}));

const pocker = { textAlign: 'left', width: '40px', height: '60px' }
export default function BET() {
    const app_container = {
        backgroundColor: 'rgb(17,24,39) ',
        color: 'white',
        height: useMediaQuery('(min-width:800px)') ? '100vh' : '110vh',

    }
    const location = useLocation();
    const { state, name } = location.state;
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        const input = event.target.value;
        const sanitizedInput = input.replace(/\D/g, '');
        setValue(sanitizedInput);
    }
    return (
        <div style={app_container}>{ }
            <Grid container sx={{ px: 3 }}>
                <Link href="/" sx={{ mt: 1 }}>
                    <img src='assets/pocker.png' style={pocker} />
                </Link>
                <Link href="/list_bet" sx={{ mt: 1 }}>
                    <Button variant='contained' sx={topbutton}>
                        <Typography variant='subtitle1'>
                            LIST A BET
                        </Typography>
                    </Button>
                </Link>
                <Grid sm={12} xs={12} sx={{ mx: useMediaQuery('(min-width:1200px)') ? 30 : 0, textAlign: 'center' }} >

                    <Typography variant={useMediaQuery('(min-width:800px)') ? 'h4' : 'h6'} sx={{ fontStyle: 'italic' }}>
                        BET AGAINST
                    </Typography>
                    <Typography variant={useMediaQuery('(min-width:800px)') ? 'h5' : 'subtitle1'} style={{ color: 'rgb(244,244,245)' }}>
                        {name}
                    </Typography>

                    <Box sx={{ textAlign: 'center', color: 'white' }} >
                        <Box sx={{ display: 'flex', mt: 5, justifyContent: 'center' }} >
                            <Typography variant='h5' sx={{ mt: 2, mr: 3 }} >
                                1)
                            </Typography>
                            <CssTextField
                                sx={stylefield}
                                label=""
                                placeholder="enter@email.com"
                                InputProps={{ style: { color: 'white' } }}
                            />

                        </Box>
                        <Box sx={{ display: 'flex', mt: 5, justifyContent: 'center' }}>
                            <Typography variant='h5' sx={{ mt: 2, mr: 3 }} >
                                2)
                            </Typography>
                            <CssTextField
                                style={stylefield}
                                label=""
                                type="text"
                                placeholder="enter your $cashtag"
                                InputProps={{ style: { color: 'white' } }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', mt: 3, justifyContent: 'center' }}>
                            <Typography variant='h5' sx={{ mt: 2, mr: 3 }} >
                                3)
                            </Typography>
                            <Box sx={{ width: '50%' }}>
                                <Typography variant={useMediaQuery('(min-width:800px)') ? 'h5' : 'h6'} sx={{ mt: 2, marginLeft: '10px' }}>
                                    Send $10 to $BetUNow to enter your wager
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center' }}>
                        <Typography variant='subtitle1' >
                            <Styledcheckbox />
                            I am 21 years or older and I have remitted via Cash App and agreed to the Terms of Service
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{ fontWeight: '600', fontStyle: 'Italic', textAlign: "center", mt: 2 }}>
                        If you win,you get $19
                    </Typography>
                </Grid>
                <Link href="/" sx={{ margin: 'auto' }}>
                    <Button variant='contained' sx={{ margin: 'auto', px: 3, mb: 5, mt: 3, backgroundColor: 'rgb(55, 48, 163)', borderRadius: '30px', color: 'white' }}>
                        <UploadIcon />
                        <Typography variant='subtitle1'>
                            SUBMIT A BET
                        </Typography>
                    </Button>
                </Link>
            </Grid>
        </div>
    );
}
