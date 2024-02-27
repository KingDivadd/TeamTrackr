import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CiEdit } from "react-icons/ci";
import { Box, Typography } from '@mui/material';
import { BiMessageSquareEdit } from "react-icons/bi";
import { BsThreeDotsVertical } from 'react-icons/bs';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import david from '../asset/david.jpg'
import { RiUserVoiceLine } from "react-icons/ri";
import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

export function MsgGridMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <div
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ padding: '0', display: 'flex', justifyContent: 'flex-end',}}
        >
            <BsThreeDotsVertical size={'1.5rem'} color='grey' />
        </div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose} sx={{height: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Group info</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{height: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Select messages</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{height: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Close chat</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{height: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Clear chat</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{height: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Exit group</Typography>
            </MenuItem>
            {/* <MenuItem onClick={handleClose} sx={{height: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Delete group</Typography> 
            </MenuItem> */}

        </Menu>
        </>
    );
}

export function ChatMsgMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ padding: '0', display: 'flex', justifyContent: 'flex-end'}}
        >
            <BsThreeDotsVertical color='red' size={'1.35rem'} />
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>
                <Typography variant='h5' fontWeight='500' >Group info</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Typography variant='h5' fontWeight='500' >Select messages</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Typography variant='h5' fontWeight='500' >Close chat</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Typography variant='h5' fontWeight='500' >Clear chat</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Typography variant='h5' fontWeight='500' >Exit group</Typography>
            </MenuItem>
            {/* <MenuItem onClick={handleClose}>
                <Typography variant='h5' fontWeight='500' >Delete group</Typography> 
            </MenuItem> */}

        </Menu>
        </>
    );
}


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
export function ProfilePix() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <div
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ padding: '0', display: 'flex', justifyContent: 'flex-end'}}
        >
        <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', cursor: 'pointer' }} variant="dot" >
            <Avatar alt="Remy Sharp" src={david} sizes={'3.5rem'} sx={{cursor: 'pointer'}} />
        </StyledBadge>
        </div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            
        >
            <MenuItem onClick={handleClose} sx={{p: '0'}}>
                <Grid container sx={{width: '12.5rem', height: '15rem', background: 'white'}}></Grid>
            </MenuItem>
        </Menu>
        </>
    );
}

export function ChatMediaMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <div
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ padding: '0', display: 'flex', justifyContent: 'flex-end'}}
        >
        <RiUserVoiceLine size={'1.5rem'} color={'gray'} />
        </div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            
        >
            <MenuItem onClick={handleClose} sx={{p: '0 .75rem', width: '12rem', height: '2.75rem', display: 'flex',justifyContent: 'flex-start', alignItems: 'center', gap: '.75rem'}}>
                <Box className={'media-btn'}  >
                    <IoCallOutline  size='1.3rem' /> 
                </Box>
                <Typography variant='h5' fontWeight='500'>Voice call</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{p: '0 .75rem', width: '12rem', height: '2.75rem', display: 'flex',justifyContent: 'flex-start', alignItems: 'center', gap: '.75rem'}}>
                <Box className={'active-media-btn'}  >
                    <IoVideocamOutline  size='1.5rem' /> 
                </Box>
                <Typography variant='h5' fontWeight='500'>Video call</Typography>
            </MenuItem>
        </Menu>
        </>
    );
}


export function GuestProfile() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <div
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ padding: '0', display: 'flex', justifyContent: 'flex-end',}}
        >
            <Avatar sizes={'8rem'} src={david} sx={{width: '2rem', height: '2rem'}} >User</Avatar>
        </div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose} sx={{height: 'auto'}} >
                <Avatar variant='rounded' src={david} sx={{width: '100%', minWidth: '12.5rem', height: '10rem'}} ></Avatar>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{height: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Omolabi Emmanuel</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{height: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500'  >tigerMan</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{height: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500'  >08044907610</Typography>
            </MenuItem>

        </Menu>
        </>
    );
}


export function UserEditBtn() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <div
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ padding: '0', display: 'flex', justifyContent: 'flex-end'}}
        >
            <BiEdit size={'1.25rem'} color='#F6F5FF' />
        </div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose} sx={{heigh: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Copy </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{heigh: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Edit </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{heigh: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Delete </Typography>
            </MenuItem>

        </Menu>
        </div>
    );
}

export function RequestProfile() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <div
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ padding: '0', display: 'flex', justifyContent: 'flex-end',}}
        >
            <Typography variant='h5' fontWeight='500' >Veiw Profile</Typography>
        </div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose} sx={{height: 'auto'}} >
                <Avatar  alt="Remy Sharp" variant='rounded' src={david} sx={{width: '100%', minWidth: '12.5rem', height: '10rem'}} ></Avatar>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{height: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Omolabi Emmanuel</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{height: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500'  >tigerMan</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{height: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500'  >08044907610</Typography>
            </MenuItem>

        </Menu>
        </>
    );
}
export function RequestMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <div
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ padding: '0', display: 'flex', justifyContent: 'flex-end'}}
        >
            <CiEdit color='black' size={'1.4rem'} />
        </div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem  sx={{heigh: '2.25rem'}} >
                <RequestProfile />
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{heigh: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Accept</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{heigh: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Delete</Typography>
            </MenuItem>
        </Menu>
        </div>
    );
}


export function ChatInfoUserEditBtn() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <div
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ padding: '0', display: 'flex', justifyContent: 'flex-end'}}
        >
            <PiDotsThreeVerticalBold size={'1.25rem'} color='gray' />
            
        </div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem  sx={{heigh: '2.25rem'}} >
                <RequestProfile />
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{heigh: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Make Admin</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{heigh: '2.25rem'}} >
                <Typography variant='h5' fontWeight='500' >Remove</Typography>
            </MenuItem>

        </Menu>
        </div>
    );
}