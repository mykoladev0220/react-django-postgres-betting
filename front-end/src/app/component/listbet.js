import React, { useState } from 'react';
import Link from '@mui/material/Link';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import UploadIcon from '@mui/icons-material/Upload';
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
const StyledDateTimePicker = styled(MobileDateTimePicker)({
    width: '50%',
    border: '1px solid #E0E3E7',
    borderRadius: '3px',
    color: '#A0AAB4',
    input: {
        color: '#A0AAB4'
    }
})
const textfieldstyle = {
    width: '50%'
}
const Styledcheckbox = styled(Checkbox)(({ theme }) => ({
    color: 'rgba(97, 94, 91, 1)',

    '&.Mui-checked': {
        color: '',
    },
}));
const pocker = { textAlign: 'left', width: '40px', height: '60px' }
export default function ListBet() {
    const textfieldstyleSpec = {
        width: useMediaQuery('(min-width:800px)') ? '50%' : '45%'
    }
    const app_container = {
        backgroundColor: 'rgb(17,24,39)',
        color: 'white',
        height: useMediaQuery('(min-width:800px)') ? '105vh' : '115vh',

    }
    const [value, setValue] = useState('');
    const [valuecash, setValueCash] = useState('');
    const handleChangeCash = (event) => {
        const input = event.target.value;
        const sanitizedInput = input.replace(/\D/g, '');
        setValueCash(sanitizedInput);
    }
    const handleChange = (event) => {
        const input = event.target.value;
        const sanitizedInput = input.replace(/\D/g, '');
        setValue(sanitizedInput);
    }
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const regexPattern = /^10(\.\d+)?$/;
    }
    return (
        <div style={app_container}>
            <Grid container sx={{ px: 3, pt: 1 }}>
                <Link href="/">
                    <img src='assets/pockergreen.png' style={pocker} />
                </Link>
                <Grid sm={12} xs={12} sx={{ fontStyle: 'italic' }}>
                    <Typography variant='h5' sx={{ fontWeight: '600', textAlign: 'center', mt: -3 }}>
                        LIST A BET
                    </Typography>

                    <Box sx={{ mt: 5, textAlign: 'center' }}>
                        <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center' }}>
                            <Typography variant={useMediaQuery('(min-width:800px)') ? 'h5' : 'subtitle1'} sx={{ mt: 2, mr: 2, ml: useMediaQuery('(min-width:800px)') ? -5 : -7 }} >
                                1)AMOUNT
                            </Typography>
                            <CssTextField
                                label=""
                                style={textfieldstyle}
                                type='number'
                                onChange={handleInputChange}
                                placeholder="minimum:$10"
                                InputProps={{ style: { color: 'white' } }}
                                inputProps={{ min: 10 }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center' }}>
                            <Typography variant={useMediaQuery('(min-width:800px)') ? 'h5' : 'subtitle1'} sx={{ mt: 2, mr: 1, ml: useMediaQuery('(min-width:800px)') ? 10 : 4 }} >
                                2)TEAM
                            </Typography>
                            <CssTextField
                                style={textfieldstyle}
                                label=""
                                type='text'
                                placeholder="The New Orelans Saints"
                                InputProps={{ style: { color: 'white' } }}
                            />
                            <Typography variant={useMediaQuery('(min-width:800px)') ? 'h5' : 'subtitle1'} sx={{ mt: 2, ml: 1 }}>
                                to WIN
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center' }}>
                            <Typography variant={useMediaQuery('(min-width:800px)') ? 'h5' : 'subtitle1'} sx={{ mt: 2, mr: 2, ml: useMediaQuery('(min-width:800px)') ? 0 : -4 }} >
                                3)Event
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <StyledDateTimePicker />
                            </LocalizationProvider>

                        </Box>
                        <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center', ml: useMediaQuery('(min-width:800px)') ? 0 : -6 }}>
                            <CssTextField
                                style={textfieldstyleSpec}
                                sx={{ ml: useMediaQuery('(min-width:800px)') ? 12 : 11 }}
                                label=""
                                placeholder="your@email.com"
                                InputProps={{ style: { color: 'white' } }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center', ml: useMediaQuery('(min-width:800px)') ? 0 : -6 }}>
                            <CssTextField
                                style={textfieldstyleSpec}
                                sx={{ ml: useMediaQuery('(min-width:800px)') ? 12 : 11 }}
                                label=""
                                value={valuecash}
                                onChange={handleChangeCash}
                                type='text'
                                placeholder="$yourcashtag"
                                InputProps={{ style: { color: 'white' }, pattern: '[0-9]*', inputMode: 'numeric', maxLength: 10 }}
                            />
                        </Box>
                    </Box>
                    <Typography variant={useMediaQuery('(min-width:800px)') ? 'h5' : 'subtitle1'} sx={{ mt: 2 }}>
                        Send wager amount to $BetUNow to enter your wager
                    </Typography>
                    <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center' }}>
                        <Typography variant='subtitle1'>
                            <Styledcheckbox />
                            I am 21 years or older and I have remitted via Cash App and agreed to the Terms of Service
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{ fontWeight: "600", fontStyle: 'italic', mt: 2 }}>
                        If you win,you get $19
                    </Typography>
                    <Link href="/">
                        <Button variant='contained' sx={{ margin: 'auto', px: 3, mt: 3, backgroundColor: 'rgb(55, 48, 163)', borderRadius: "30px" }}>
                            <UploadIcon />
                            <Typography variant='subtitle1'>
                                SUBMIT A BET
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}