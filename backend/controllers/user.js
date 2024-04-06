import UserModel from "../models/User.js";
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserController {
    
    static createUser = async( req, res )=> {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10 );

        try {
            await UserModel.create({
                name: req.body.name,
                password: hashedPassword,
                email:req.body.email,
                location: req.body.location
            })
        res.json({success:true});
        } catch (error) {
            console.log(error);
            res.json({success:false});            
        }
    }

    static validateUser = async( req, res ) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        try {
            const result = await UserModel.findOne({email:req.body.email});

            if( result == undefined )
               return res.json({ success: false });
               
            const isMatch = await bcrypt.compare(req.body.password, result.password);

            const data ={
                user: {
                    id: result._id
                }
            }
           

            // Creating JWT Authorisation Token
            const jwtSecret = "$qwertyuiopasdfghjklzxcvbnm$";
            const authToken = jwt.sign(data,jwtSecret);
            
            // console.log( jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzM2Y2Njc4ZDIzOGVkNGY4MTg0YThhIn0sImlhdCI6MTY4MTEzMjQwOH0.K8klx0Huxc4hf6T-hh2r0BN0l9_QqwqA3u_eNUwMMfE","$qwertyuiopasdfghjklzxcvbnm$" ))

            if( result.email === req.body.email && isMatch )
                return res.json({success:true, authToken: authToken });
            else 
                return res.json({success:false});

        } catch (error) {
            console.log(error);
            res.json({success:false}); 
        }
    } 

}

export default UserController;