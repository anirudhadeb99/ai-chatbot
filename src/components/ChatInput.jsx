import { useEffect, useRef,useState } from "react";
import { Stack, Box, TextField, Button} from "@mui/material";


const ChatInput = ({generateResponse,setScroll,chat,clearChat})=>{

    const [input,setInput]= useState('');
    const inputRef = useRef(null);
    const [showSnackBar , setShowSnackBar] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        generateResponse(input)
        setInput('');
        setScroll(prev => !prev)
    }

    const handleSave = ()=>{
        const chat_history = JSON.parse(localStorage.getItem('chat')) || [];
        const date = new Date();
        localStorage.setItem('chat',JSON.stringify([{chat:chat,datetime:date}, ...chat_history]));
        clearChat();
        setShowSnackBar(true);
    }

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    return(
        <Box flexShrink={0} px={{xs: .5, md:3}} pb={{xs:1,md:3}}> 
         <Box component={'form'} onSubmit={handleSubmit}>
            <Stack
              direction={'row'}
              spacing={{xs:.5,md:2}}
            >
                <TextField
                placeholder="Message Bot AI..."
                sx={{
                    flex:1,
                    bgcolor:'primary.light' , 
                    borderRadius:1,
                    '& input':{
                        fontSize:{xs:12 , md:16},
                        paddingLeft:{xs:1,md:2},
                        paddingRight:{xs:1,md:2}
                    }
                }}
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                required
                inputRef={inputRef}
                />

                <Button 
                variant="contained"
                type="submit"
                sx={{
                    fontSize:({xs:12,md:16}),
                    '@media(max-width : 767px)':{
                        minWidth:0,
                        paddingLeft:1.5,
                        paddingRight:1.5
                    }
                }}
                >
                    Ask
                </Button>
                <Button 
                variant="contained"
                onClick={handleSave}
                disabled={!chat.length>0}
                sx={{
                    fontSize:({xs:12,md:16}),
                    '@media(max-width : 767px)':{
                        minWidth:0,
                        paddingLeft:1.5,
                        paddingRight:1.5
                    }
                }}
                >
                    Save
                </Button>

            </Stack>
         </Box>
        </Box>

    )

}

export default ChatInput;