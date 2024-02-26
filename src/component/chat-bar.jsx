import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import {Styled} from '@mui/material/styles'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { BiMessageSquareEdit } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import david from '../asset/david.jpg'



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
        transform: 'scale(.8)',
        opacity: 1,
        },
        '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
        },
    },
}));

const ChatBar = ({data})=>{
    const [clicked, setClicked] = useState([])

    const handleClick = ()=>{
        setClicked(data);
        console.log(data)

    }
    return (
        <Grid  className = {clicked === data ? 'chat-list-active': 'chat-list'} onClick={handleClick} container component='main' sx={{height: '4rem', p: '0 1.5rem',}}>
            <Grid item xs={2.5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start',}}>
                <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" >
                    <Avatar alt="Remy Sharp" src={david} size={'5rem'} />
                </StyledBadge>
            </Grid>
            <Grid item conatainer direction={'column'} xs={7} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', width: '100%'}}>
                    <Typography variant='h5' fontWeight={'500'}>Adebola </Typography> 
                </Grid>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' , width: '100%'}}>
                    {/* <Typography variant='h6' fontWeight={'500'} color={'#644DFF'}>Typing...</Typography> */}
                    <Typography variant='h6' noWrap fontWeight={'400'}>I dey enter school around 12 sha.</Typography>
                </Grid>
            </Grid>
            <Grid item direction={'column'} container xs={2.5} sx={{display: 'flex', alignItems: 'center',}}>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%', }}>
                    <Typography variant='h6' fontWeight={'400'}>12:25 PM</Typography>
                </Grid>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', width: '100%', }}>
                    <Box sx={{background: 'red',p: '.15rem .35rem', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                        <Typography variant='h7' color='white' fontWeight={'500'}>10</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ChatBar