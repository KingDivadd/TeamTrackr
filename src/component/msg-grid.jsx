import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box,Button, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { BiMessageSquareEdit } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import david from '../asset/david.jpg'
import { PiCaretUp } from "react-icons/pi";
import { PiCaretDown} from "react-icons/pi";
import { IoFolderOpenOutline, IoMenu } from "react-icons/io5";
import ChatBar, {NewUserChatBar} from './chat-bar';
import { RequestMenu } from './menu-list';

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
    const [width, setWidth] = useState(window.innerWidth)
    const {side_grid, setSide_grid} = ChatState()

    useEffect(()=>{
        
    }, [])
    const resize = ()=>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{

        window.addEventListener('resize', resize)
        return()=>{
            window.removeEventListener('resize', resize)
        }
    }, [width])
    
    const handleGrid = ()=>{
        if(side_grid){
            setSide_grid(false)
        }
        if(!side_grid){
            setSide_grid(true)
        }
    }

    const handleHideSideGrid = ()=>{
        console.log('clicked')
        if(side_grid){
            setSide_grid(false)
        }
    }

    return (
        <Grid component={'main'} onClick={handleHideSideGrid} container direction={'column'} sx={{width: '100%', height: '100%', borderRight: '1px solid #F6F5FF'}}>
        {false ? <>
            {width > 699 ? <Grid item xs={1} sx={{width: '100%', heigth: '100%', display: 'flex', alignItems: 'center', p: '0 1.5rem'}} >
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '2.5rem'}}>
                    <Typography variant='h4' fontWeight={'500'}>Chat</Typography>
                    <BiMessageSquareEdit size={'1.5rem'} color={'#644DFF'} />
                </Box>
            </Grid>
            :
            <Grid item xs={1} sx={{width: '100%', heigth: '100%', display: 'flex', alignItems: 'center', p: '0 1.5rem'}} >
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '2.5rem'}}>
                    <Box  onClick={handleGrid} style={{display: 'flex', justifyContent: 'flex-start', width :'1.5rem'}} ><IoMenu size={'1.75rem'} color={'#644DFF'} /> </Box>
                    <Typography variant='h4' fontWeight={'500'} sx={{ml: '-1rem'}}>Chat</Typography>
                    <BiMessageSquareEdit size={'1.5rem'} color={'#644DFF'} />
                </Box>
            </Grid>}
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
                    {[1,2,3,4,5,6].map((data, ind)=>{

                    return(
                        <ChatBar key={ind} data={data}/>
                    )
                    })}
                </Box>
            </Grid>
        </>
        :
        <>
            {width > 699 ? <Grid item xs={1} sx={{width: '100%', heigth: '100%', display: 'flex', alignItems: 'center', p: '0 1.5rem'}} >
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '2.5rem'}}>
                    <Typography variant='h4' fontWeight={'500'}>Friends</Typography>
                    <BiMessageSquareEdit size={'1.45rem'} color={'#644DFF'} />
                </Box>
            </Grid>
            :
            <Grid item xs={1} sx={{width: '100%', heigth: '100%', display: 'flex', alignItems: 'center', p: '0 1.5rem'}} >
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '2.5rem'}}>
                    <Box  onClick={handleGrid} style={{display: 'flex', justifyContent: 'flex-start', width :'1.5rem'}} ><IoMenu size={'1.75rem'} color={'#644DFF'} /> </Box>
                    <Typography variant='h4' fontWeight={'500'} sx={{ml: '-1rem'}}>Friends</Typography>
                    <BiMessageSquareEdit size={'1.4rem'} color={'#644DFF'} />
                </Box>
            </Grid>}
            <Grid item xs={.75} sx={{width: '100%', heigth: '100%',display: 'flex', alignItems: 'flex-start', p: '0 1.5rem',}} >
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%', background: 'whitesmoke', gap: '.5rem', borderRadius: '.3rem'}}>
                    <input className='input' placeholder='Search...' type="text" style={{backgroundColor: 'whitesmoke',outline: 'none', border: 'none', height:'2.25rem', width: '100%'}} />
                    <Box sx={{width: '1.75rem',  display: 'flex', alignItems: 'center', pr: '.5rem'}}><CiSearch size={'1.4rem'} /> </Box>
                </Box>
            </Grid>
            <Grid item xs={.75} sx={{width: '100%', heigth: '100%', overflowY: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '0 1.5rem', borderBottom: '1px solid whitesmmoke'}}>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '.4rem', border: '1px solid gray', height: '2.25rem', p: '0 .75rem', cursor: 'pointer', background: 'whitesmoke'}}> <Typography variant='h5' fontWeight='400'>Friend requests</Typography> </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '.4rem', border: '1px solid gray', height: '2.25rem', p: '0 .75rem', cursor: 'pointer', background: 'whitesmoke'}}> <Typography variant='h5' fontWeight='400'>Your friends</Typography> </Box>
            </Grid>
            <Grid item xs={9.5} sx={{width: '100%', heigth: '100%', overflowY: 'auto', p: '.75rem 1.5rem' }}>
                {true ? <>
                {[1,2,3,4,5,6,7,8].map((data, ind)=>{

                        return (
                            <NewUserChatBar />
                        )
                    })}
                </>
                :
                <>
                {[1,2,3,4,5,6,7,8].map((data, ind)=>{

                        return (
                            <Grid container sx={{borderBottom: '1px solid whitesmoke', mb: '.5rem'}}>
                                <Grid item xs={2.5} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>
                                        {(data  % 2) === 1 ? <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" >
                                            <Avatar alt="Remy Sharp" src={david} sx={{width: '2.75rem', height: '2.75rem'}}>I D</Avatar>
                                        </StyledBadge> :
                                        <Avatar variant='circular' src={david} sx={{width: '2.75rem', height: '2.75rem'}}>I D</Avatar>}
                                </Grid>
                                <Grid item container xs={8.5} direction={'column'} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                                    <Grid item container xs={6} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', width: '100%'}}> 
                                        <Grid item xs={11} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', width: '100%'}}>
                                            <Typography variant='h5' noWarp fontWeight={'400'}>Emmanuel sent you a friend request</Typography>
                                        </Grid>
                                    </Grid>
                                    
                                </Grid>
                                <Grid item xs={1} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', width: '100%'}}>
                                    <RequestMenu /> 
                                </Grid>
                                
                            </Grid>
                        )
                    })}
                </>}
            </Grid>
        </>}
        </Grid>
    )
}

export default MsgGrid