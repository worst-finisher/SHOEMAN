import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    CategoryName: { type:String, trim: true, required: true }
});

const CategoryModel = new mongoose.model('shoecategories', categorySchema );

export default CategoryModel;