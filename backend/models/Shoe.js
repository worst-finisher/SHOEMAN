import mongoose from "mongoose";

const ShoeSchema = new mongoose.Schema({
    CategoryName: { type: String, trim: true, required: true },
    name: { type: String, required: true, trim: true },
    img: { type: String, required: true },
    // options: [ { value:{type:String}, 8: {type:String}, 9UK: {type:String},   } ] ,
    description: { type: String, required: true, trim: true }
});

const ShoeModel = new mongoose.model('shoes', ShoeSchema );

export default ShoeModel;