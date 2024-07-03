import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import InitialChat from "../components/InitialChat";
import ChattingCard from "../components/ChattingCard";
import ChatInput from "../components/ChatInput";
import FeedbackModal from "../components/FeedBackModal";
import { Stack} from "@mui/material";
import data from "../mock_data/mock.json"

const Home = ()=>{
   const [chat,setChat] = useState([]);
   const [chatId,setChatId]=useState(1);
   const [selectedChatId,setSelectedChatId] = useState(null);
   const [showModal,setShowModal] = useState(false);
   const [scrollToBottom,setScrollToBottom]=useState(false);
   const listRef = useRef(null);

   const generateResponse = (input)=>{
   
    const response = data.find(item=>input.toLowerCase()===item.question.toLowerCase());

    let answer = "Sorry, Did not understand your query!";
    if(response!==undefined){
        answer = response.response;
    }

    console.log(chat);

    setChat(prev =>([...prev,{
        type:'Human',
        text:input,
        time : new Date(),
        id : chatId
    },
    {
        type:'AI',
        text:answer,
        time : new Date(),
        id : chatId+1

    }
    ]
  ));
  setChatId(prev=> prev+2);

   }

   useEffect(()=>{
    listRef.current?.lastElementChild?.scrollIntoView();
   },[scrollToBottom])


    return(
        <Stack 
        height={'100vh'}
        justifyContent={'space-between'}
        sx={{
            '@media (min-width:800px)':{         
             background:'linear-gradient(rgba(151, 133, 186, 0.2),rgba(215, 199, 244, 0.2))'
            }
            }}
        >
            <Navbar/>

        {chat.length===0 && <InitialChat generateResponse={generateResponse} />}

        {chat.length>0 && (  
           <Stack
            height={1}
            flexGrow={0}
            p={{xs:2,md:3}}
            sx={{
                overflowY:'auto',
                '&::-webkit-scrollbar':{
                    width:'10px'
                },
                '&::-webkit-scrollbar-track':{
                    boxShadow:'insert 0 0 8px rgba(0,0,0,0.1)',
                    borderRadius:'8px'
                },
                '&::-webkit-scrollbar-thumb':{
                    backgroundColor:'rgba(151,133,186,0.4)',
                    borderRadius:'8px'
                }

            }}
            ref={listRef}
           >
            {
               
                chat.map((item,index)=>{
                    return(
                    <ChattingCard
                     details={item}
                     key={index}
                     updateChat={setChat}
                     setSelectedChatId={setSelectedChatId}
                     showFeedbackModal={()=>setShowModal(true)}
                    />)

                  
                })}
           </Stack>
        )}
         
         <ChatInput generateResponse={generateResponse} setScroll={setScrollToBottom} chat={chat} clearChat={()=>setChat([])}/>
        <FeedbackModal
        open={showModal}
        updateChat={setChat}
        chatId={selectedChatId}
        handleClose={()=>setShowModal(false)}/>
        </Stack>
    );
}

export default Home;