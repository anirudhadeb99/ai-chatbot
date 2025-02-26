import { Button, Typography, useMediaQuery } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Link } from "react-router-dom";
import icon from "../assets/icon.svg"
import CloseIcon from '@mui/icons-material/Close';
import AddCommentIcon from '@mui/icons-material/AddComment';

const Sidebar = ({setChat,closeMenu})=>{

    const isMobile = useMediaQuery('(max-width:800px)')

    return (
        <Box>
            {isMobile &&(
                <Button 
                endIcon={<CloseIcon/>}
                sx={{
                    width:1,
                    justifyContent:'flex-end',
                    color:'primary.dark'
                }}
                onClick={closeMenu}
                >
                    Close
                </Button>
            )}

            <Link to={'/'} style={{textDecoration:'none'}}>
                <Stack
                onClick={()=>{
                    setChat([]);
                    closeMenu();
                }}
                sx={{
                    bgcolor:'primary.main',
                    '&hover':{
                        bgcolor:'primary.bg'
                    }
                }}
                direction={'row'}
                spacing={1}
                alignItems={'center'}
                justifyContent={'space-between'}
                py={2}
                px={{xs:2,md:3}}
                >
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                    <Box
                    component={'img'}
                    src={icon}
                    height={42}
                    width={42}
                    borderRadius={2}
                    boxShadow={0}
                    flexShrink={0}
                    />
                    <Typography
                     variant={'heading'}
                     fontSize={{xs:16,md:20}}
                     color={'text.primary'}
                    >
                        New Chat
                    </Typography>
                </Stack>
                <AddCommentIcon sx={{color:'text.primary'}}/>
                </Stack>
            </Link>
            <Box p={{xs:2,md:3}}>
                <Link to={'/history'}>
                    <Button
                      variant="contained" sx={{width:1}}
                      onClick={closeMenu}
                     >
                        Past Conversations
                    </Button>
                </Link>

            </Box>
        </Box>
    )

}

export default Sidebar;