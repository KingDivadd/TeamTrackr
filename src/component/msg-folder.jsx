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


const MsgFolder = ({data})=>{
    const [show, setShow] = useState(true)

    const handleParticipants = ()=>{
        if (show){setShow(false)}
        if (!show){setShow(true)}
    }

    const {title, participants} = data
    return (
        <Box onClick={handleParticipants} sx={{width: '100%', borderTop: '1px solid whitesmoke', borderBottom: '1px solid whitesmoke', }}>
            <Grid container sx={{width: '100%', height: '2.25rem', p: '0 1.5rem', cursor: 'pointer'}}>
                <Grid item xs={1} sx={{display: 'flex',justifyContent: 'flex-start', alignItems: 'center',}}><IoFolderOpenOutline size={'1.4rem'} fontWeight={'400'} /></Grid>
                <Grid item xs={10} sx={{display: 'flex',justifyContent: 'flex-start', alignItems: 'center', width: '100%'}}><Typography variant='h5' noWrap fontWeight='400'>{title}</Typography></Grid>
                <Grid item xs={1} sx={{display: 'flex',justifyContent: 'flex-end', alignItems: 'center',}}>{show ? <PiCaretDown size={'1.4rem'} fontWeight={'400'} /> :
                <PiCaretUp size={'1.4rem'} fontWeight={'400'} />}</Grid>
            </Grid>
            {show && <Box sx={{mt: '1rem', maxHeight: '16.5rem', overflowY: 'auto'}}>
                {participants.map((data, ind)=>{

                    return (
                        <ChatBar key={ind} data={data}/>
                    )
                })}
            </Box>}
        </Box>
    )
}

export default MsgFolder