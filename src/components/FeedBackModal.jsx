import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Stack } from "@mui/material";
const FeedbackModal = ({ open,updateChat, chatId, handleClose }) => {
  const [feedback,setFeedback] = useState("");

  const handleSubmit = (e) => {
     e.preventDefault();
     updateChat(prev=>(
        prev.map(item=>{
          if(item.id === chatId){
            return {...item,feedback:feedback}
          }
          else
          {
            return {...item}
          }
        })
      ))
        setFeedback('');
        handleClose();
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Stack 
          spacing={{xs:2,md:2}}
            sx={{
              "@media (min-width:800px)": {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 600,
                height: 200,
                bgcolor: "background.paper",
                borderRadius: "5px",
                boxShadow: 24,
                p: 4,
                "& .MuiTextField-root": { m: 0, width: "100%" },
              },
              "@media (max-width:800px)": {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", 
                bgcolor: "background.paper",
                borderRadius: "5px",
                boxShadow: 24,
                p: 4,
                "& .MuiTextField-root": { m: 0, width: "100%" },
              }
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Provide additional feedback
            </Typography>
            <TextField
              variant="outlined"
              onChange={(e) => setFeedback(e.target.value)}
              multiline
              rows={4}
              value={feedback}
            />
            <Stack  alignItems="flex-end">
            <Button 
             onClick={handleSubmit}
             sx={{
                    fontSize:({xs:12,md:16}),
                    fontWeight:400,
                    '@media(max-width : 767px)':{
                        minWidth:0,
                        paddingLeft:1.5,
                        paddingRight:1.5
                    }
                }} variant="contained">
              Submit
            </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default FeedbackModal;
