const express = require('express')
const router = express.Router()

const data = {
  "status": true,
  "message": "List of deposits retrieved successfully",
  "data": [
    {
      "no": 1,
      "deposit_id": "DEPO-IDR-041024165727",
      "asset": "IDR",
      "amount": 95000,
      "status": false
    },
    {
      "no": 2,
      "deposit_id": "DEPO-IDR-041024165727",
      "asset": "IDR",
      "amount": 140000,
      "status": true
    },
    {
      "no": 3,
      "deposit_id": "DEPO-BTC-041024165727",
      "asset": "BTC",
      "amount": 0.00018809,
      "status": true
    },
    {
      "no": 4,
      "deposit_id": "DEPO-IDR-041024165727",
      "asset": "IDR",
      "amount": 95000,
      "status": true
    },
    {
      "no": 5,
      "deposit_id": "DEPO-IDR-041024165727",
      "asset": "IDR",
      "amount": 295000,
      "status": true
    }
  ]
}

router.get('/', (req, res) => {
  res.json(data)
})

module.exports = router