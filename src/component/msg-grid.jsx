import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { BiMessageSquareEdit } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import david from '../asset/david.jpg'
import { PiCaretUp } from "react-icons/pi";
import { PiCaretDown} from "react-icons/pi";
import { IoFolderOpenOutline } from "react-icons/io5";
import ChatBar from './chat-bar';
import MsgFolder from './msg-folder'

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


const MsgGrid = ()=>{
    

    return (
        <Grid component={'main'} container direction={'column'} sx={{width: '100%', height: '100%', borderRight: '1px solid #F6F5FF'}}>
            <Grid item xs={1} sx={{width: '100%', heigth: '100%', display: 'flex', alignItems: 'center', p: '0 1.5rem'}} >
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '2.5rem'}}>
                    <Typography variant='h4' fontWeight={'500'}>Messages</Typography>
                    <BiMessageSquareEdit size={'1.5rem'} color={'#644DFF'} />
                </Box>
            </Grid>
            <Grid item xs={1} sx={{width: '100%', heigth: '100%',display: 'flex', alignItems: 'flex-start', p: '0 1.5rem'}} >
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%', background: 'whitesmoke', gap: '.5rem', borderRadius: '.3rem'}}>
                    <input className='input' placeholder='Search...' type="text" style={{backgroundColor: 'whitesmoke',outline: 'none', border: 'none', height:'2.25rem', width: '100%'}} />
                    <Box sx={{width: '1.75rem',  display: 'flex', alignItems: 'center', pr: '.5rem'}}><CiSearch size={'1.4rem'} /> </Box>
                </Box>
            </Grid>
            <Grid item xs={10} sx={{width: '100%', heigth: '100%', overflowY: 'auto', }}>
                <Box sx={{width: '100%', p: '0 1.5rem'}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', width:'100%', mb: '1rem'}}>
                        <Typography variant= 'h5' fontWeight={'500'}>Online now</Typography>
                        <Typography variant='h5' fontWeight={'500'} color='#644DFF'>All</Typography>
                    </Box>
                    <Box sx={{width: '100%', display: 'flex',gap: '.75rem',  justifyContent: 'flex-start', overflow: 'auto', }}>
                        {[1,2,3,8,9,10,1,1,1,1,1,1,1,1].map((data, ind)=>{

                            return (
                                    <StyledBadge key={ind} overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" >
                                        <Avatar alt="Remy Sharp" src={david} size={'3.75rem'} />
                                    </StyledBadge>
                                
                            )
                        })}
                    </Box>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',p: '1.5rem 0'}}>
                    {[{title: 'WORK PROJECT 3', participants: [1,2,3,4,5]}, {title: 'WORK PROJECT 4', participants: [1,2,3,4,]}, {title: 'REFREGERATOR FABRICATION GRP', participants: [1,2,3,4,,5,6,7,8,9]}].map((data, ind)=>{

                    return(
                        <MsgFolder key={ind} data={data} />
                    )
                })}
                </Box>
            </Grid>
        </Grid>
    )
}

export default MsgGrid