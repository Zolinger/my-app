import React, { useState, useEffect } from "react";
import { store } from "./Store/index";
import { Provider } from "react-redux";
import { Router } from "./Router/Router";
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
import IconButton from "@mui/material/IconButton";

function App() {
  const INIT_BOT = {
    id: uuidv4(),
    author: "Bot",
    text: "Hello!",
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const CHAT_BOT = {
    id: uuidv4(),
    author: "Bot",
    text: "To Be, or not to Be...",
  };

  const [messageList, setMessageList] = useState([INIT_BOT]);

  useEffect(() => {
    let timer;
    if (messageList[messageList.length - 1].author !== "Bot")
      timer = setTimeout(() => {
        setMessageList([...messageList, CHAT_BOT]);
      }, 1200);
    return () => {
      clearTimeout(timer);
    };
  }, [CHAT_BOT, messageList]);

  return (
    <Provider store={store}>
      <div className="main-window">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My Project
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <div className="family">
          <div className="menu">
            <Router />
          </div>
          <div className="chat">
            <MessageList messageList={messageList} />
            <MessageForm
              messageList={messageList}
              setMessageList={setMessageList}
            />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
