import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'


import useRoutes from './routes/users.js'
import userRoutes from './routes/Questions.js'
import answerRoute from './routes/Answer.js'



const app = express();
dotenv.config();
app.use(express.json({limit: "30mb", extended :true}))
app.use(express.urlencoded({limit: "30mb" , extended : true}))
app.use(cors());

app.get('/', (req,res) => {
    res.send("This is a stack overflow clone")
})

app.use('/user', useRoutes)
app.use('/questions', userRoutes)
app.use('/answer' , answerRoute)


const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL
// "mongodb+srv://admin:admin@stack-overflow-clone.9g0prn2.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DATABASE_URL, { useNewUrlParser: true , useUnifiedTopology : true })
    .then(() => app.listen(PORT , () => {console.log(`SERVER RUNNING ON port ${ PORT }`)}))
    .catch((err) => console.log(err.message))


    