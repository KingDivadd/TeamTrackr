import React, { useRef, useEffect, useState } from "react";
import {Box, CircularProgress, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { MdOutlinePendingActions } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { ChatState } from 'context/chatContext';
import { FaCar } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoChecklist } from "react-icons/go";
import Skeleton from '@mui/material/Skeleton';
import { useMediaQuery } from '@mui/material';
import { CiEdit } from "react-icons/ci";
import { PiCaretUp } from "react-icons/pi";
import { PiCaretDown} from "react-icons/pi";
import ProjectMenu from "./menu-list";


export default function ProjectCard() {
    const [showDrop, setShowDrop] = useState(false)

    const handleDrop = ()=>{
        if(showDrop){
            setShowDrop(false)
        }
        if (!showDrop){
            setShowDrop(true)
        }
    }
    
    return (
    <Card  sx={{ minWidth: '13rem', cursor: 'pointer' , mb:'.75rem'}}>
        <CardContent sx={{height: 'auto', p: '0 .75rem', }}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'space-between', justifyContent: 'center',}}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '3.5rem', borderBottom: '1px solid #F6F5FF'}}>
                    <Typography variant='h5' noWarp fontWeight={'500'}>WORK PROJECT 3</Typography>
                    <ProjectMenu />
                </Box>
                {showDrop && <Box sx={{borderBottom: '1px solid #F6F5FF', p: '.75rem 0'}}>
                    <Typography variant='h5' noWarp fontWeight={'500'}>Here we will have some import doct and what not</Typography>
                </Box>}
                <Box onClick={handleDrop} sx={{cursor: 'pointer',display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '2.5rem', mb: '-.75rem'}}>
                    <Typography variant='h5' noWarp fontWeight={'500'}>Expand</Typography>
                    {showDrop ? 
                    <PiCaretDown size={'1.4rem'} />
                    :
                    <PiCaretUp size={'1.4rem'} />}
                </Box>
            </Box>       
        </CardContent>
        
    </Card>
    );
}