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
import {ChatInfoUserEditBtn} from './menu-list'
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsCheckAll } from "react-icons/bs";


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
            {(data % 2 === 0) ? <>
            <Grid item xs={2.25} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start',}}>
                <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" >
                    <Avatar alt="Remy Sharp" src={david} sx={{height: '2.5rem', width: '2.5rem'}} />
                </StyledBadge>
            </Grid>
            <Grid item conatainer direction={'column'} xs={7.25} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
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
            </>
            :
            <>
            <Grid item xs={2.25} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start',}}>
                <Avatar alt="Remy Sharp" src={''} sx={{height: '2.5rem', width: '2.5rem'}} ><HiMiniUserGroup color='white' size={'1.5rem'} /> </Avatar>
            </Grid>
            <Grid item conatainer direction={'column'} xs={7.25} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
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
                    {/* <Box sx={{background: 'red',p: '.15rem .35rem', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                        <Typography variant='h7' color='white' fontWeight={'500'}>10</Typography>
                    </Box> */}
                    <BsCheckAll color='green' size={'1.4rem'} />
                    {/* <Box sx={{p: '.15rem .35rem', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                        
                    </Box> */}
                </Grid>
            </Grid>
            </>}
        </Grid>
    )
}

export default ChatBar

export const ChatMemberBar = ({data})=>{

    return(
        <Grid container sx={{borderBottom: '1px solid whitesmoke', mb: '.5rem'}}>
            <Grid item xs={2.5} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>
                <Box sx={{p: '.25rem', background: '#F6F5FF', borderRadius: '100%'}}> 
                    {(data  % 2) === 1 ? <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" >
                        <Avatar alt="Remy Sharp" src={david} sx={{width: '2.75rem', height: '2.75rem'}}>I D</Avatar>
                    </StyledBadge> :
                    <Avatar variant='circular' src={david} sx={{width: '2.75rem', height: '2.75rem'}}>I D</Avatar>}
                </Box>
            </Grid>
            <Grid item container xs={9.5} direction={'column'} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Grid item container xs={6} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', width: '100%'}}> 
                    <Grid item xs={11} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', width: '100%'}}>
                        <Typography variant='h5' noWarp fontWeight={'400'}>Emmanuel</Typography>
                    </Grid>
                    <Grid item xs={1} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%'}}>
                        <ChatInfoUserEditBtn /> 
                    </Grid>
                </Grid>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%'}}>
                    <Typography variant='h5' fontWeight={'400'}>Available</Typography> 
                </Grid>
            </Grid>
        </Grid>
    )
}


export const NewUserChatBar = ()=>{

    return(
        <Grid className='new-user-chat-bar' container sx={{}}>
            <Grid item xs={3} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>
                <Avatar variant='circular' sx={{width: '4.25rem', height: '4.25rem'}} src={david}></Avatar>
            </Grid>
            <Grid item container direction='column' xs={9} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', pl: '.75rem'}}>
                <Grid item xs={5} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%'}}>
                    <Typography variant='h5' fontWeight='500' color={'black'}>Adebimpe Peace</Typography>
                </Grid>
                <Grid item xs={7} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '2.15rem', background: '#644DFF', borderRadius: '.4rem', border: '1px solid #644DFF', p: '0 .5rem', cursor: 'pointer' }}>
                        <Typography variant='h6' fontWeight='500' color={'white'}>Add friend</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '2.15rem', borderRadius: '.4rem', border: '1px solid gray', p: '0 .5rem', cursor: 'pointer' }}>
                        <Typography variant='h6' fontWeight='500'>Remove</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}