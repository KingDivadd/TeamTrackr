import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Typography, useTheme, useMediaQuery, Hidden } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import SideBarGrid, { SideBarGridMobile } from 'component/side-grid';
import MsgGrid from 'component/msg-grid';
import ChatGrid from 'component/chat-grid';
import TaskGrid from 'component/task-grid'

const HomePage = ()=>{
    const [width, setWidth] = useState(window.innerWidth)
    const {side_grid, setSide_grid} = ChatState()

    const resize = ()=>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{

        window.addEventListener('resize', resize)
        return()=>{
            window.removeEventListener('resize', resize)
        }
    }, [width])
    
    const isLG = useMediaQuery(theme => theme.breakpoints.down('lg'));
    const isMD = useMediaQuery(theme => theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const isXS = useMediaQuery(theme => theme.breakpoints.down('xs'));
    return (
        <Grid container component='main' sx={{p: '.25rem', height: '100vh', overflow: 'auto', background: '#FFFFFF', position: 'relative'}}>
            {width > 900 &&
            <>
                {width > 1250 ? 
                <Grid item xs={6}  sm={2.5} md={2.5} lg={2} sx={{width: '100%', height: '100%'}}> <SideBarGrid /> </Grid>:
                <Grid item xs={6}  sm={2.5} md={1.25} lg={1} sx={{width: '100%', height: '100%'}}> <SideBarGrid /> </Grid>}
            </>}
            

            {width > 900 ? <>
                {width > 1250 ? 
                <Grid item xs={5}  sm={4.5} md={4.5} lg={2.9} sx={{width: '100%', height: '100%'}} > <MsgGrid /> </Grid>:
                <Grid item xs={12}  sm={5.5} md={5} lg={3.4} sx={{width: '100%', height: '100%'}} > <MsgGrid /> </Grid>}
            </>:
            <Grid item xs={12}  sm={5.25} md={5.5} lg={3.4} sx={{width: '100%', height: '100%'}} > <MsgGrid /> </Grid>
            }

            

            {width > 599 && 
            <>
                {width > 900 ?
                <>
                    {width > 1250 ? 
                    <Grid item xs={0} sm={5} md={5}  lg={4.1} sx={{width: '100%', height: '100%'}} > <ChatGrid /> </Grid>:
                    <Grid item xs={0} sm={6.5} md={5.75}  lg={4.6} sx={{width: '100%', height: '100%'}} > <ChatGrid /> </Grid>}
                </>:
                <Grid item xs={12} sm={6.75} md={6.5}  lg={4.6} sx={{width: '100%', height: '100%'}} > <ChatGrid /> </Grid>
                }
            </>
            }
            
            
            {width > 1199 && <Grid item xs={12} sm={3} md={0}  lg={3} sx={{width: '100%', height: '100%'}} > <TaskGrid /> </Grid>}
            {side_grid && <SideBarGridMobile />}
        </Grid>
    )
}

export default HomePage