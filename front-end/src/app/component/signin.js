import React, { useState } from 'react';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';

import OutlinedInput from '@mui/material/OutlinedInput';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
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
export default function SignIn() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const app_container = {
        backgroundColor: 'rgb(17,24,39) ',
        color: 'white',
        height: useMediaQuery('(min-width:800px)') ? '100vh' : '110vh',
    }
    return (
        <div style={app_container}>{ }
            <Grid container sx={{ px: 3 }}>
                <Link href="/" sx={{ mt: 1 }}>
                    <img src='assets/pocker.png' style={pocker} />
                </Link>
                <Grid sm={12} xs={12} sx={{ mx: useMediaQuery('(min-width:1200px)') ? 30 : 0, textAlign: 'center' }} >
                    <Typography variant={useMediaQuery('(min-width:800px)') ? 'h4' : 'h6'} sx={{ fontStyle: 'italic' }}>
                        Sign In
                    </Typography>
                    <Box sx={{ textAlign: 'center', color: 'white' }} >
                        <Box sx={{ display: 'flex', mt: 5, justifyContent: 'center' }} >
                            <CssTextField
                                sx={stylefield}
                                label="Email"
                                type='email'
                                placeholder="enter@email.com"
                                InputProps={{ style: { color: 'white' } }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', mt: 5, justifyContent: 'center' }}>
                            <FormControl sx={{ m: 1, width: '50%' }} variant="contained">
                                <CssTextField
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    InputProps={{ style: { color: 'white' } }}
                                    label="Password"
                                />
                            </FormControl>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center' }}>
                        <Typography variant='subtitle1' >
                            <Styledcheckbox />
                            remember me
                        </Typography>
                    </Box>
                </Grid>
                <Link href="/admin" sx={{ margin: 'auto' }}>
                    <Button variant='contained' sx={{ margin: 'auto', px: useMediaQuery('(min-width:800px)') ? 10 : 5, mb: 5, mt: 3, backgroundColor: 'rgb(55, 48, 163)', borderRadius: '30px', color: 'white' }}>
                        <Typography variant='subtitle1'>
                            Sign In
                        </Typography>
                    </Button>
                </Link>
            </Grid>
        </div>
    );
}
