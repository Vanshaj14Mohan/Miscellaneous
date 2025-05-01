const express = require("express");
const app = express();
const port = 8080;

//app.use -> ie The work should be done for every request:
app.use(express.urlencoded({extended: true}));//if urlencoded data happens that express automatically parse and understand it.
app.use(express.json());//Just in case if we are sending data in json format. So it can parse it too.

app.get("/register", (req,res)=>{
    let {user, password} =req.query;
    res.send(`Standard GET Response. Welcome ${user}`);
});

app.post("/register", (req,res)=>{
    console.log(req.body); //through req.body express will start understanding the data we sent
    let {user, password} =req.body;
    res.send(`Standard POST Response. Welcome ${user}`);
});
//use hoppscotch to send request and verify.

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
});