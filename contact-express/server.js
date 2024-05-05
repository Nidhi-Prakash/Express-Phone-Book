import express from "express";
import { userRouter } from "./routes/userRouter.js";
import { createDbConnection } from "./config/DbConnection.js";
import { contactsRouter } from "./routes/contactsRouter.js";

const app = express();

const PORT = 5000;

app.use(express.json());
app.use("/user", userRouter);
app.use("/contacts", contactsRouter);

app.use(express.static("../phone-book/build"));
app.get('*', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

const runServer = async () => {
  await createDbConnection();
  app.listen(PORT);
};

runServer();
