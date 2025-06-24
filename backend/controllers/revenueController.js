const Revenue = require('../models/Revenue');

exports.getRevenueByMonth = async (req, res) => {
  const { month, year } = req.query;

  try {
    const data = await Revenue.aggregate([
      {
        $match: {
          month,
          year: parseInt(year) // matches number type
        }
      },
      {
        $group: {
          _id: '$productName',
          totalRevenue: { $sum: '$revenue' }
        }
      }
    ]);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
