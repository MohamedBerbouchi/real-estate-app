import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);

  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    console.log(receiverId)
    console.log(data)
    const receiver = getUser(receiverId);
    console.log(receiver);
    io.to(receiver.socketId).emit("getMessage", data);
  });

  socket.on("disconnect", () => {
    removeUser(socket.id)
  });
});
let onlineUser =[]
const addUser = (userId, socketId) => {
  const userExits = onlineUser.find((user) => user.userId === userId);
  if (!userExits) {
    onlineUser.push({ userId, socketId });
  }
};
const getUser = (userId) => {
    return onlineUser.find((user) => user.userId === userId);
  };


const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

io.listen("4000");
