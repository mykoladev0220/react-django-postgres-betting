import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';


const pocker = { textAlign: 'left', width: '40px', height: '60px' }
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const StyledButton = styled(Button)(({ theme }) => ({
    '&:hover': {
        border: 'none'
        // backgroundColor: 'none'
    },

}));

const app_container = {
    backgroundColor: 'rgb(17,24,39)',
    color: 'white',
    height: '100vh',
}
const datas = [
    { price: '$10', name: 'JACK PAUL', windate: 'WIN - 8/5/23-9PM EST', mailone: '$Macro marc@gmail.com', mailtwo: '$Dennis denn@gmail.com' },
    { price: '$120', name: 'PAUL DAVID', windate: 'WIN - 8/5/23-9PM EST', mailone: '$Macro marc@gmail.com', mailtwo: '$Dennis denn@gmail.com' },
    { price: '$130', name: 'GILBERT EDWARD', windate: 'WIN - 8/5/23-9PM EST', mailone: '$Macro marc@gmail.com', mailtwo: '$Dennis denn@gmail.com' },
    { price: '$130', name: 'GILBERT EDWARD', windate: 'WIN - 8/5/23-9PM EST', mailone: '$Macro marc@gmail.com', mailtwo: '$Dennis denn@gmail.com' },
]
export default function Admin() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/faq')
    }
    return (
        <div style={app_container}>
            <Grid container sx={{ px: 3, pt: 1, textAlign: 'center' }}>
                <Link href="/">
                    <img src='assets/pocker.png' style={pocker} />
                </Link>
                <Grid sm={12} xs={12} sx={{ mx: useMediaQuery('(min-width:800px)') ? 20 : 0, mt: 2, textAlign: 'center' }}>
                    <Typography variant='h4' sx={{ fontWeight: '600', fontStyle: 'italic' }}>
                        ADMIN
                    </Typography>
                    <Grid sm={12} xs={12} sx={{
                        "&::-webkit-scrollbar": {
                            width: 10,
                            display: 'none',
                        },
                        "&::-webkit-scrollbar-track": {
                            backgroundColor: "transparent"
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#aaa",
                            borderRadius: 2
                        }, mt: 1, overflowY: 'auto', height: "450px"
                    }}>
                        {datas.map((data, index) => (
                            <Item key={index} sx={{ p: 1, mx: 1, mt: 2, backgroundColor: 'white', borderRadius: '5px' }}>
                                <Grid xs={12} container >
                                    <Grid xs={6} sm={6}>
                                        <StyledButton variant='outlined' sx={{ border: '1px solid rgb(17,24,39)', color: 'black', textTransform: 'none' }}>
                                            <EditIcon />
                                            <Typography variant='h5' >
                                                edit
                                            </Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid xs={6} sm={6}>
                                        <StyledButton variant='outlined' sx={{ border: '1px solid rgb(17,24,39)', color: 'black', textTransform: 'none' }}>
                                            <DeleteIcon />
                                            <Typography variant='h5'>
                                                delete
                                            </Typography>
                                        </StyledButton>
                                    </Grid>
                                </Grid>
                                <Grid xs={12} container sx={{ mx: 2 }}>
                                    <Grid sm={12} xs={12}>
                                        <Typography variant='h5' sx={{ color: 'black' }}>
                                            {data.price + ' ' + data.name + ' ' + data.windate}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container xs={12} >
                                    <Grid xs={12} sm={6} sx={{ color: 'black' }}>
                                        <Typography variant='h5'  >
                                            {data.mailone}
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12} sm={6} sx={{ color: 'rgb(191,64,112)' }} >
                                        <Typography variant='h5' >
                                            {data.mailtwo}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Item>
                        ))}

                    </Grid>
                    <Button variant='outlined' onClick={handleClick} sx={{ mt: 1, fontStyle: 'italic', outline: 'none', border: 'none', color: 'white', textTransform: 'none' }}>
                        <EditIcon />
                        <Typography variant='h4' >
                            edit FAQ
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}