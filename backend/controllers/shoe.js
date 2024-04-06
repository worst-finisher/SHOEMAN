import ShoeModel from "../models/Shoe.js";
import CategoryModel from "../models/ShoeCategory.js";
class ShoeController {

    static getAllShoeData = async ( req, res ) => {
        try {
            const result = await ShoeModel.find();
            res.send(result);
        } catch (error) {
            console.log(error)
        }
    }

    static getCategoryShoe = async ( req, res ) => {
        try {
            const result = await CategoryModel.find();
            res.send(result);
        } catch (error) {
            console.log(error)
        }
    }
}

export default ShoeController;