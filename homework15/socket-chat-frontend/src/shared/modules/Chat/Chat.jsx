import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { Box, TextField, Button, Typography, Paper, Fade } from "@mui/material";
import { styles } from "./ChatStyles";

const socket = io("http://localhost:3000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const [userId] = useState(() => Math.random().toString(36).substring(2, 8));

  useEffect(() => {
    socket.on("newMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => socket.off("newMessage");
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;
    socket.emit("chatMessage", { userId, text: input });
    setInput("");
  };

  return (
    <Box sx={styles.container}>
      <Paper elevation={6} sx={styles.paper}>
        <Typography variant="h4" align="center" sx={styles.title}>
          💬 Онлайн-чат
        </Typography>

        <Box sx={styles.messagesBox}>
          {messages.length === 0 ? (
            <Typography align="center" color="text.secondary">
              Пока нет сообщений 🕊️
            </Typography>
          ) : (
            messages.map((msg, i) => {
              const isOwn = msg.userId === userId;
              return (
                <Fade in key={i}>
                  <Box sx={styles.messageWrapper(isOwn)}>
                    <Box sx={styles.messageBubble(isOwn)}>{msg.text}</Box>
                  </Box>
                </Fade>
              );
            })
          )}
          <div ref={messagesEndRef} />
        </Box>

        <Box sx={styles.inputRow}>
          <TextField
            fullWidth
            label="Введите сообщение"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button variant="contained" onClick={handleSend} sx={styles.sendButton}>
            Отправить
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Chat;


