// require('dotenv').config();
import dotenv from "dotenv";
import connectDB from "./db/index.js";



dotenv.config({
    path: ".env"
});

connectDB()

.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.error("MONGODB connection failed !!", error);
    
});


console.log(process.env.MONGODB_URI);




/*
( async () => {
    try{
 await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}` )
    }catch(error){
        console.error("ERROR", error)
        throw err
    }
})() */