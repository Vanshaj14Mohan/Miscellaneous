const express = require("express");
const app = express();
const port = 8080;

app.get("/register", (req,res)=>{
    let {user, password} =req.query;
    res.send(`Standard GET Response. Welcome ${user}`);
});

app.post("/register", (req,res)=>{
    res.send("Standard POST Response");
});
//use hoppscotch to send request and verify.

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
});