const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const postRoute = require("./routes/post.route");
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");
const chatRoute = require("./routes/chat.route");
const messageRoute = require("./routes/message.route");

const app = express();

app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(8800, () => {
  console.log("Server is running!");
});
