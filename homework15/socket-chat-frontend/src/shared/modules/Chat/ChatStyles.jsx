export const styles = {
  container: {
    height: "70vh",
    width: "450px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
    fontFamily: '"Poppins", sans-serif',
  },

  paper: {
    width: "90%",
    maxWidth: 600,
    borderRadius: "20px",
    overflow: "hidden",
    p: 3,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },

  title: {
    mb: 2,
    fontWeight: 600,
    background: "linear-gradient(45deg, #1976d2, #42a5f5)",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  messagesBox: {
    height: 350,
    overflowY: "auto",
    p: 2,
    borderRadius: "10px",
    background: "#f9f9f9",
    border: "1px solid #ddd",
    mb: 2,
  },

  messageWrapper: (isOwn) => ({
    mb: 1.5,
    display: "flex",
    justifyContent: isOwn ? "flex-end" : "flex-start",
  }),

  messageBubble: (isOwn) => ({
    maxWidth: "70%",
    px: 2,
    py: 1,
    borderRadius: "15px",
    background: isOwn
      ? "linear-gradient(45deg, #1976d2, #42a5f5)"
      : "#e0f7fa",
    color: isOwn ? "#fff" : "#000",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  }),

  inputRow: {
    display: "flex",
    gap: 1,
  },

  sendButton: {
    background: "linear-gradient(45deg, #1976d2, #42a5f5)",
    color: "white",
    px: 3,
    borderRadius: "10px",
    fontWeight: 600,
    "&:hover": {
      background: "linear-gradient(45deg, #1565c0, #2196f3)",
    },
  },
};
