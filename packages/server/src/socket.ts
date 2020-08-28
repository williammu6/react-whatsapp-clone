import io from "socket.io";
import http from "http";
import { Server } from "http";

export class SocketServer {
  app: Express.Application;

  server: Server;

  socket: SocketIO.Server;

  usersChats: { [userId: number]: { } } = { };

  handleSendMessage() {
    console.log("handleSendMessage");
  }

  handleMessageReceived() {
    console.log("handleMessageReceived");
  }

  handleEvents() {
    this.socket.on("connection", (s: io.Socket) => {
      let user_id: number;

      console.log("User connected");

      s.on("join", ({ userId, chats }) => {
        user_id = userId;
        this.usersChats[userId] = chats.map((chat: { id: number }) => chat.id);
        console.log(this.usersChats);

        s.emit("connected", true);
      });

      s.on("send_message", this.handleSendMessage);

      s.on("message_received", this.handleMessageReceived);

      s.on("disconnect", () => {
        console.log("User disconnected");
        delete this.usersChats[user_id];
      });
    });
  }

  setup() {
    this.server = http.createServer(this.app);

    this.socket = io(this.server);

    this.handleEvents();

    const port = 8889;

    this.server.listen(port, () => {
      console.log(`Socket running on localhost:${port}`);
    });
  }

  constructor(app: Express.Application) {
    this.app = app;

    this.setup();
  }
}
