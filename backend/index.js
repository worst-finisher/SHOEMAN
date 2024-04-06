import express from 'express';
import connectDB from './db/connectdb.js';
import shoe from './routes/shoeRoute.js';
import user from './routes/userRoute.js';
import orders from './routes/orderRoute.js'
import cors from 'cors';

const app = express();
app.use(cors());
const port = process.env.PORT || '5000'
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb+srv://hritiksaini:sainishoepalace@shoeman.azopfnn.mongodb.net/?retryWrites=true&w=majority';

// Connect Mongo 
connectDB(DATABASE_URL);

// JSON middleware
app.use(express.json());

// Using Routes
app.use('/shoe', shoe );
app.use('/user', user );
app.use('/order', orders );

app.listen(port, ()=>{
    console.log(`Server is running at https://localhost${port}` );
})

