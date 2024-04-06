import OrderModel from "../models/Orders.js";

class OrderDataController {

    static saveData = async (req, res)=> {
          let data = req.body.order_data 
          await data.splice( 0, 0, { Order_date: req.body.order_date } )

          let eid = await OrderModel.findOne( {'email': req.body.email })
        //   console.log(eid);

          if( eid === null )
          {
            try {
                await OrderModel.create({
                    email: req.body.email,
                    order_data: [data]
                }).then(() => {
                    res.json({ success: true } )
                })
            } catch (error) {
                console.log(error.message)
                res.send("Server Error", error.message );
            }
          }

          else{
            try {
                await OrderModel.findOneAndUpdate( { email: req.body.email  }, 
                    {
                        $push: { order_data: data }
                    }).then( () => {
                        res.json({success: true })
                    })
            } catch (error) {
                res.send("Server Error", error.message )
            }
          }
    }

    static getUserData = async( req, res ) => {
        try {
            const result = await OrderModel.findOne( {email: req.body.email} );
            res.json({orderData: result})
        } catch (error) {
            res.send("Server Error", error.message )
        }
    }
    
}

export default OrderDataController;