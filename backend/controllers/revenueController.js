const Revenue = require('../models/Revenue');

exports.getRevenueByMonth = async(req, res)=>{
     const{month, year}=req.query;

     try{
        const data = await Revenue.aggregate([
            {
                $match:{
                    date:{
                        $gte: new Date(`${year}-${month}-01`),
                        $lte: new Date(`${year}-${month}-31`)
                    }
                }
            },
            {
                $group:{
                    _id: '$productName',
                    totalRevenue:{ $sum: '$revenue'}
                }
            }
        ]);
        res.json(data);
     }
     catch(err)
     {
        res.status(500).json({error: err.message});
     }
}