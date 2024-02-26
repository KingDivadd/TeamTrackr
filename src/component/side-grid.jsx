import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { TbSmartHome } from "react-icons/tb";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GoPeople } from "react-icons/go"
import { IoCalendarOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const SideBarGrid = ()=>{
    const [width, setWidth] = useState(window.innerWidth)
    const [page, setPage] = useState("")

    const resize = ()=>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{

        window.addEventListener('resize', resize)
        return()=>{
            window.removeEventListener('resize', resize)
        }
    }, [width])

    useEffect(()=>{
        setPage(sessionStorage.getItem('page'))
    }, [])

    const handleClick = (data) =>{
        setPage(data)
        sessionStorage.setItem('page', data)
    }

    const isLG = useMediaQuery(theme => theme.breakpoints.down('lg'));
    const isMD = useMediaQuery(theme => theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const isXS = useMediaQuery(theme => theme.breakpoints.down('xs'));
    return (
        <Grid component={'main'} container direction={'column'} sx={{width: '100%', height: '100%', borderTopLeftRadius: '.3rem', borderBottomLeftRadius: '.3rem',borderRight: '1px solid #F6F5FF' }}>
            {width > 1250 ? <Grid item xs={1} sx={{width: '100%', heigth: '100%', display: 'flex',alignItems: 'center', pl: '1.5rem' }} >
                <Typography variant='h3' fontWeight={'700'} color='#644DFF'> T</Typography><Typography variant='h3' fontWeight={'700'} >eam</Typography><Typography variant='h3' fontWeight={'700'} color={'#644DFF'}>Trackr</Typography>
            </Grid>:
            <Grid item xs={1} sx={{width: '100%', heigth: '100%', display: 'flex',alignItems: 'center', pl: '1.5rem' }} >
                <Typography variant='h3' fontWeight={'700'} color='#644DFF'> T</Typography><Typography variant='h3' fontWeight={'700'} >t</Typography>
            </Grid>}
            
            <Grid item xs={10} sx={{width: '100%', heigth: '100%',  pt: '4rem'}} >
                <Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-start', gap: '.25rem', alignItems: 'flex-start', width: '100%',}}>
                    <Box className={page === 'home-page' ? 'side-grid-box-active' : 'side-grid-box'} onClick={ ()=> handleClick("home-page")} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '.75rem'}}>
                        <TbSmartHome size={'1.5rem'} />
                        {width > 1250 && <Typography variant='h5' fontWeight={'500'} >Home Page</Typography>}
                    </Box>
                    <Box className={page === 'messages' ? 'side-grid-box-active' : 'side-grid-box'} onClick={ ()=> handleClick("messages")} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '.75rem'}}>
                        
                        <BiMessageSquareDetail  size={'1.4rem'} />
                        {width > 1250 && <Typography variant='h5' fontWeight={'500'} >Messages</Typography>}
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', background: '#644DFF', p: '.15rem .35rem'}}>
                            <Typography variant='h6' fontWeight={'500'} color='white' >10</Typography>
                        </Box>
                    </Box>
                    <Box className={page === 'friends' ? 'side-grid-box-active' : 'side-grid-box'} onClick={ ()=> handleClick("friends")} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '.75rem', }}>
                        <GoPeople size={'1.4rem'} />
                        {width > 1250 && <Typography variant='h5' fontWeight={'500'} >Friends</Typography>}
                    </Box>
                    <Box className={page === 'calender' ? 'side-grid-box-active' : 'side-grid-box'} onClick={ ()=> handleClick("calender")} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '.75rem', }}>
                        <IoCalendarOutline size={'1.4rem'} />
                        {width > 1250 && <Typography variant='h5' fontWeight={'500'} >Calender</Typography>}
                    </Box>
                    <Box className={page === 'settings' ? 'side-grid-box-active' : 'side-grid-box'} onClick={ ()=> handleClick("settings")} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '.75rem', }}>
                        <IoSettingsOutline size={'1.4rem'} />
                        {width > 1250 && <Typography variant='h5' fontWeight={'500'} >Settings</Typography>}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={1} sx={{width: '100%', heigth: '100%', display: 'flex', alignItems: 'center'}} >
                <Box className={'side-grid-box-logout'} onClick={ ()=> handleClick("log-out")} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '.75rem', }}>
                        <IoIosLogOut size={'1.4rem'} />
                        {width > 1250 && <Typography variant='h5' fontWeight={'500'} >Log out</Typography>}
                    </Box>
            </Grid>
        </Grid>
    )
}

export default SideBarGrid


export const SideBarGridMobile = ()=>{
    const [width, setWidth] = useState(window.innerWidth)
    const [page, setPage] = useState("")
    const {side_grid, setSide_grid} = ChatState()

    useEffect(()=>{
    }, [side_grid])


    const resize = ()=>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{

        window.addEventListener('resize', resize)
        return()=>{
            window.removeEventListener('resize', resize)
        }
    }, [width])

    useEffect(()=>{
        setPage(sessionStorage.getItem('page'))
    }, [])

    const handleClick = (data) =>{
        setPage(data)
        sessionStorage.setItem('page', data)
    }
    return (
        <Grid className = {side_grid? "active-side-grid": "side-grid"} component={'main'} container direction={'column'} sx={{width: '17rem', height: '100vh', borderTopLeftRadius: '.3rem', borderBottomLeftRadius: '.3rem', background: '#F6F5FF' }}>
            <Grid item xs={1} sx={{width: '100%', heigth: '100%', display: 'flex',alignItems: 'center', pl: '1.5rem'}} >
                <Typography variant='h3' fontWeight={'700'} color='#644DFF'> T</Typography><Typography variant='h3' fontWeight={'700'} >eam</Typography><Typography variant='h3' fontWeight={'700'} color={'#644DFF'}>Trackr</Typography>
            </Grid>
            
            <Grid item xs={9.5} sx={{width: '100%', heigth: '100%',  pt: '4rem'}} >
                <Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-start', gap: '.25rem', alignItems: 'flex-start', width: '100%',}}>
                    <Box className={page === 'home-page' ? 'side-grid-box-active' : 'side-grid-box'} onClick={ ()=> handleClick("home-page")} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '.75rem'}}>
                        <TbSmartHome size={'1.5rem'} />
                        <Typography  variant='h5' fontWeight={'500'} >Home Page</Typography>
                    </Box>
                    <Box className={page === 'messages' ? 'side-grid-box-active' : 'side-grid-box'} onClick={ ()=> handleClick("messages")} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '.75rem'}}>
                        
                        <BiMessageSquareDetail  size={'1.4rem'} />
                        <Typography variant='h5' fontWeight={'500'} >Messages</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', background: '#644DFF', p: '.15rem .35rem'}}>
                            <Typography variant='h6' fontWeight={'500'} color='white' >10</Typography>
                        </Box>
                    </Box>
                    <Box className={page === 'friends' ? 'side-grid-box-active' : 'side-grid-box'} onClick={ ()=> handleClick("friends")} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '.75rem', }}>
                        <GoPeople size={'1.4rem'} />
                        <Typography variant='h5' fontWeight={'500'} >Friends</Typography>
                    </Box>
                    <Box className={page === 'calender' ? 'side-grid-box-active' : 'side-grid-box'} onClick={ ()=> handleClick("calender")} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '.75rem', }}>
                        <IoCalendarOutline size={'1.4rem'} />
                        <Typography variant='h5' fontWeight={'500'} >Calender</Typography>
                    </Box>
                    <Box className={page === 'settings' ? 'side-grid-box-active' : 'side-grid-box'} onClick={ ()=> handleClick("settings")} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '.75rem', }}>
                        <IoSettingsOutline size={'1.4rem'} />
                        <Typography variant='h5' fontWeight={'500'} >Settings</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={1.5} sx={{width: '100%', heigth: '100%', display: 'flex', alignItems: 'flex-start'}} >
                <Box className={'side-grid-box-logout'} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '.75rem', }}>
                        <IoIosLogOut size={'1.4rem'} />
                        <Typography variant='h5' fontWeight={'500'} >Log out</Typography>
                    </Box>
            </Grid>
        </Grid>
    )
}