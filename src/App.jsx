import React, { useEffect, useState } from "react";
import "./App.css";
import "./Components/MessageForm/MessageForm.css";
import "./Components/MessageForm/MessageList.css";
import { MessageList } from "./Components/MessageForm/MessageList";
import { MessageForm } from "./Components/MessageForm/MessageForm";
import { v4 as uuidv4 } from "uuid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const INIT_MESSAGES = {
    id: uuidv4(),
    author: "T-800",
    text: "I need your clothes, your boots and your motorcycle",
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const BOT_MESSAGES = {
    id: uuidv4(),
    author: "T-800",
    text: "I search John Connor, did you know him?",
  };

  const [messageList, setMessageList] = useState([INIT_MESSAGES]);

  useEffect(() => {
    let timer;
    if (messageList[messageList.length - 1].author !== "T-800")
      timer = setTimeout(() => {
        setMessageList([...messageList, BOT_MESSAGES]);
      }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [BOT_MESSAGES, messageList]);

  return (
    <div className="chat">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
            <Button color="inherit">Main chat</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <MessageList messageList={messageList} />
      <MessageForm messageList={messageList} setMessageList={setMessageList} />
    </div>
  );
}

export default App;
