// const express = require('express');
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import courseRoutes from './routes/courseRoutes.js';
import careerRoutes from './routes/careerRoutes.js';
import ProjectChallengeRoutes from './routes/ProjectChallengeRoutes.js';



const app = express();
const PORT = process.env.PORT || 5000;




app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://gnanamoorthy967:edtechapi1@edtechapi.dhzsd.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('connected to MongoDB'))
.catch((err)=>console.error('could not connect to MongoDB:' , err));

app.get('/', (req,res)=>{
    res.send('welcome to the Edtech !!!');
});

app.use('/api/Course', courseRoutes);
app.use('/api/Career', careerRoutes);
app.use('/api/Project-challenge', ProjectChallengeRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})


