import { Server } from "socket.io";
import { createServer } from "node:http";

const startWebsocketServer = () => {
  const httpServer = createServer();

  const wsServer = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  wsServer.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("chatMessage", (message) => {

      console.log("Пришло сообщение:", message);

      wsServer.emit("newMessage", message);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  httpServer.listen(process.env.SOCKET_PORT || 3000, () =>
    console.log(`Websocket run on ${process.env.SOCKET_PORT || 3000}`)
  );
};

export default startWebsocketServer;


