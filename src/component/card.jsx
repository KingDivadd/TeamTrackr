import React, { useRef, useEffect, useState } from "react";
import {Box, CircularProgress, Grid, Button} from '@mui/material';
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
import { GoPersonAdd } from "react-icons/go";
import { IoAdd } from "react-icons/io5";
import {RequestMenu} from './menu-list'
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import david from '../asset/david.jpg'
import { MdPeopleAlt } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import {ChatMemberBar} from "./chat-bar"

export default function FriendRequestCard() {
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
                    <Typography variant='h5' noWarp fontWeight={'500'}>Friend Requests</Typography>
                    <GoPersonAdd size={'1.5rem'} />
                </Box>
                {showDrop && <Box sx={{borderBottom: '1px solid #F6F5FF', p: '.75rem 0'}}>
                    {[1,2,3,4,5].map((data, ind)=>{

                        return (
                            <Grid container width={'100%'} sx={{mb: '.25rem', borderBottom: '1px solid whitesmoke'}}>
                                <Grid item xs={10} sx={{p: '.25rem 0'}}>
                                    <Typography variant='h5' fontWeight='500'>Omolabi Adeniyi sent you a friend request</Typography>
                                </Grid>
                                <Grid item xs={2} sx={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', p: '.25rem 0'}}>
                                    <RequestMenu />
                                </Grid>
                            </Grid>
                        )
                    })}
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

export function GroupRequestCard() {
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
                    <Typography variant='h5' noWarp fontWeight={'500'}>Group Requests</Typography>
                    <AiOutlineUsergroupAdd size='1.5rem' />
                </Box>
                {showDrop && 
                <Box sx={{borderBottom: '1px solid #F6F5FF', p: '.75rem 0'}}>
                    {/* <Typography variant='h5' noWarp fontWeight={'500'}>You currently have no request</Typography> */}
                    {[1,2,3].map((data, ind)=>{

                        return (
                            <Grid container width={'100%'} sx={{mb: '.25rem', borderBottom: '1px solid whitesmoke'}}>
                                <Grid item xs={10} sx={{p: '.25rem 0'}}>
                                    <Typography variant='h5' fontWeight='500'  sx={{pb: '.25rem'}} >You've been invited to join Playing Group </Typography> 
                                </Grid>
                                <Grid item xs={2} sx={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', p: '.25rem 0'}}>
                                    <RequestMenu />
                                </Grid>
                            </Grid>
                        )
                    })}
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

export function ChatInfoCard() {
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
                    <Typography variant='h5' noWarp fontWeight={'500'}>Chat Info</Typography>
                    <GoPeople size='1.5rem' />
                </Box>
                {showDrop && 
                <Box sx={{borderBottom: '1px solid #F6F5FF', p: '.75rem 0'}}>
                    <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',mb: '.75rem' }}>
                        <Avatar variant="circular" sx={{height: '6rem', width: '6rem'}}><MdPeopleAlt color={'white'} size={'3rem'} /></Avatar>
                    </Box>
                    <Box sx={{width: '100%', display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center',mb: '.75rem' }}>
                        <Typography variant="h5" fontWeight={'500'} mb={'.5rem'} textAlign={'center'} > Playing Group</Typography>
                        <Typography variant="h6" fontWeight={'400'} mb={'.5rem'} textAlign={'center'} >Group 10 members</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',mb: '1rem',  }}>
                        <Box className={'chat-info-media'}  sx={{}}><IoCallOutline  size={'1.5rem'} /></Box>
                        <Box className={'chat-info-media'}  sx={{}}><IoVideocamOutline  size={'1.5rem'} /></Box>
                        <Box className={'chat-info-media'}  sx={{}}><FiSearch  size={'1.5rem'} /></Box>
                    </Box>
                    <Box sx={{display: 'flex',flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',mb: '.1rem' }}>
                        <Typography variant="h5" fontWeight={'500'} mb={'.5rem'} textAlign={'center'} color={'#644DFF'} >Add Group description</Typography>
                        <Typography variant="h6" fontWeight={'400'} mb={'.5rem'} textAlign={'center'} >Playing and other info...</Typography>
                        <Typography variant="h6" fontWeight={'400'} mb={'.5rem'} textAlign={'center'} >Created by David</Typography>
                        <Typography variant="h5" fontWeight={'500'} mb={'.75rem'} textAlign={'center'} color={'#644DFF'} >5 members</Typography>
                    </Box>
                    <Box sx={{display: 'flex',flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', overflow: 'auto', maxHeight: '20rem', pt: '.5rem', borderTop: '1px solid whitesmoke'}}>
                        {[1,2,3,4,5].map((data, ind)=>{
                            return(
                                <ChatMemberBar key={ind} data={data} />
                            )
                        })}
                    </Box>
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