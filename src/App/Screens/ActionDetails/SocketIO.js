import io from "socket.io-client";
let socket;
export const initiateSocket = (room) => {
  socket = io("http://localhost:2000/");
  console.log(`Connecting socket...`);
  socket.on("connect", () => {
    console.log(`connected socket...`);
  });
  socket.on("connect_error", (erroe) => {
    console.log("connection error", erroe.name);
  });
};
export const disconnectSocket = () => {
  console.log("Disconnecting socket...");
  if (socket) socket.disconnect();
};
export const subscribeToChat = (cb) => {
  if (!socket) return true;
  socket.on("chat", (msg) => {
    console.log("Websocket event received!");
    return cb(null, msg);
  });
};
export const sendMessage = (room, message) => {
  if (socket)
    socket.emit("send-message", {
      room,
      message,
      senderName: socket.id,
      id: Date.now(),
    });
};
export const onNewMessage = () => {
  if (socket)
    return socket.on("message", (message) => {
      console.log("new message rece", message);

      return message;
    });
};
