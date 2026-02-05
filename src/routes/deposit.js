const express = require('express')
const router = express.Router()

const data = {
  "status": "success",
  "message": "List of deposits retrieved successfully",
  "data": [
    {
      "no": 1,
      "deposit_id": "DEPO-IDR-041024165727",
      "asset": "IDR",
      "amount_nett": 95000,
      "status": "rejected"
    },
    {
      "no": 2,
      "deposit_id": "DEPO-IDR-041024165727",
      "asset": "IDR",
      "amount_nett": 140000,
      "status": "success"
    },
    {
      "no": 3,
      "deposit_id": "DEPO-BTC-041024165727",
      "asset": "BTC",
      "amount_nett": 0.00018809,
      "status": "success"
    },
    {
      "no": 4,
      "deposit_id": "DEPO-IDR-041024165727",
      "asset": "IDR",
      "amount_nett": 95000,
      "status": "success"
    },
    {
      "no": 5,
      "deposit_id": "DEPO-IDR-041024165727",
      "asset": "IDR",
      "amount_nett": 295000,
      "status": "success"
    }
  ]
}


router.get('/', (req, res) => {
    res.json(data)
})

module.exports = router