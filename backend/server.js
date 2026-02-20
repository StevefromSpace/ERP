const express=require('express');
const cors=require('cors');
require('dotenv').config();

const app=express();
const PORT=5000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("ERP is online!");
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`)   
});

const FACULTY_USER={
    email:"admin@college.com",
    password:"admin@123"
}

app.post('/api/login', (req,res)=>{
    const{email, password}=req.body;

    if(email===FACULTY_USER.email && password===FACULTY_USER.password){
        res.status(200).json({success: true, message: "Login successful"});
    } else {
        res.status(401).json({success: false, message: "Invalid Credential"});
    }
});