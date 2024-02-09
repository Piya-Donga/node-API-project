const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const db = require("./Database/db");
const usercontroller = require("./controller/user.controller");

app.post("/std", usercontroller.userpost);
app.get("/std",usercontroller.userget);
app.post("/std",usercontroller.userpost);
app.put("/std/:id",usercontroller.userput);
app.delete("/std/:id",usercontroller.userdelete);
app.post("/login",usercontroller.userlogin);

app.listen(4000);
