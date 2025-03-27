const express= require('express')
const mongoose = require('mongoose')
const app=express();
const cors = require('cors')
const PORT=4545;
const User=require('./models/login')
const Mongo_url="mongodb://127.0.0.1:27017/Authentication";
app.use(express.json());
app.use(cors({
    origin: '*'
}));
async function main(){
    await mongoose.connect(Mongo_url)
}

main().then(()=>{console.log("conected to DB")})
.catch((err)=>{console.log(err)});

// routes

app.get("/",(req,res)=>{
    res.send("This is home");
})

app.post("/login", async (req,res) => {
    const { gmail, password } = req.body;
    try {
        const user = await User.findOne({ gmail: gmail });
        if (user) {
            if (password === user.password) {
                console.log("Login successful");
                res.send("Login Successfully");
            } else {
                res.send("Invalid Password");
            }
        } else {
            res.send("User Not Registered");
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.send('Internal Server Error');
    }
});


app.post('/signup',async(req,res)=>{
    const {username,gmail,password,phone}=req.body
    try {
        const existingUser = await User.findOne({ gmail: gmail });
        if (existingUser) {
            res.send('User Already Registered');
        } else {
            const newUser = new User({
                username,
                gmail,
                password,
                phone
            });
            await newUser.save();
            res.send('Successfully Registered');
        }
    } catch (err) {
        res.status(500).send(err.toString());
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

