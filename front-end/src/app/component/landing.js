import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const DisabledButton = styled(Button)(({ theme }) => ({
    color: 'white',
    '&.Mui-disabled': {
        backgroundColor: 'rgb(149, 156, 169)'
    },
}));
const pocker = { textAlign: 'left', width: '40px', height: '60px' }
const app_container = {
    backgroundColor: 'rgb(17,24,39) ',
    color: 'rgba(255,255,255,1)',
    height: '103vh',
}
const topbutton = {
    position: 'absolute',
    top: '10px',
    right: '20px',
    border: '1px solid white',
    backgroundColor: 'transparent',
    color: 'rgb(245,245,246)',
    transform: 'skew(-30deg)',
}
const datas = [
    { price: '10$', name: 'JACK PAUL', windate: "WIN-8/5/23-9PM EST" },
    { price: '12$', name: "PAUL DAVID", windate: 'WIN-8/5/23-9PM EST' },
    { price: '11$', name: "GILBERT EDWARD", windate: 'WIN-8/5/23-9PM EST' },
    { price: '22$', name: "BOB NOCY", windate: 'WIN-8/5/23-9PM EST' },
    { price: '42$', name: "ERIC DUBN", windate: 'WIN-8/5/23-9PM EST' },
]
export default function Landing() {
    const navigate = useNavigate();

    return (
        <div style={app_container}>
            <Grid container sx={{ pt: 2, px: 5 }}>
                <img src='assets/pocker.png' style={pocker} />
                <Link href="/signin" sx={{ mt: 1 }}>
                    <Button variant='contained' sx={topbutton}>
                        <Typography variant='subtitle1'>
                            ADMIN
                        </Typography>
                    </Button>
                </Link>
                <Typography variant='h5' sx={{ margin: 'auto', marginTop: '50px' }}  >
                    <i>BET AGAINST</i>
                </Typography>
                <Grid sm={12} xs={12} sx={{
                    "&::-webkit-scrollbar": {
                        width: 10,
                        display: 'none'
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "transparent"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#aaa",
                        borderRadius: 2
                    }, textAlign: 'left', mt: 3, mx: useMediaQuery('(min-width:800px)') ? 20 : 0, color: 'rgba(0,0,0,0.7)', height: '400px', overflowY: 'auto'
                }}>
                    {datas.map((data, index) => (
                        <Item key={index} sx={{ mb: 3, backgroundColor: 'white', color: 'black' }}>
                            <Grid container sx={{ alignItems: 'center', textAlign: 'center' }}>
                                <Grid sm={8} md={9} xs={12}>
                                    <Typography variant='h5'>{data.price + ' ' + '-' + data.name + ' ' + '-' + ' ' + data.windate}</Typography>
                                </Grid>
                                <Grid sm={4} md={3} xs={12}>
                                    <Button variant='contained' onClick={() => navigate('/bet_aganist', { state: { name: data.name + '' + data.windate } })} sx={{ px: 2, backgroundColor: 'rgb(17,24,39)', color: 'white' }}>
                                        <AttachMoneyIcon />
                                        <Typography variant='subtitle2'>
                                            BET<br />AGAINST
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Item>
                    ))}
                </Grid>
                <Link href="/list_bet" sx={{ margin: 'auto' }}>
                    <Button variant='contained' sx={{ margin: 'auto', px: 3, mt: 5, backgroundColor: 'rgb(55, 48, 163)', color: 'white', borderRadius: '30px' }}>
                        <FormatListBulletedIcon />
                        <Typography variant='subtitle1'>
                            LIST A BET
                        </Typography>
                    </Button>
                </Link>
                <Grid xs={12} sm={12} sx={{ mt: useMediaQuery('(min-width:800px)')?1:4, textAlign: 'left' }}>
                    <Link href="/faq">
                        <Button variant='contained' sx={{ backgroundColor: 'rgb(17,24,39)', border: '1px solid white' }}>
                            <Typography variant='h5' sx={{ fontStyle: "italic", color: 'white' }}>
                                FAQ
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}