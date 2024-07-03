import {useMediaQuery, Stack, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useOutletContext } from "react-router-dom";
const Navbar = ()=>{

    const isMobile = useMediaQuery('(max-width:800px)');
    const {handleMobileMenu} = useOutletContext();

    return(
    <Stack direction={'row'} alignItems={'center'} spacing={2} mt={2}>
    {isMobile && <MenuIcon sx={{fontSize:'40px'}} onClick={()=>handleMobileMenu(true)}/>}
    <Typography pl={3} sx={{fontSize:'40px',color:'primary.dark'}}>Bot AI</Typography>  
    </Stack>
     );
}

export default Navbar;