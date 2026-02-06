const express = require('express')
const router = express.Router()

const data = {
  "success": true,
  "message": "List of members retrieved successfully",
  "data": [
    {
      "no": 1,
      "email": "ronald@example.com",
      "username": "Ronald",
      "name": "Ronald Watson",
      "status": "Active",
      "kyc": "No-KYC"
    },
    {
      "no": 2,
      "email": "cody@example.com",
      "username": "Cody",
      "name": "Cody Cooper",
      "status": "Active",
      "kyc": "No-KYC"
    },
    {
      "no": 3,
      "email": "shawn@example.com",
      "username": "Shawn",
      "name": "Shaw Nguyen",
      "status": "Active",
      "kyc": "No-KYC"
    },
    {
      "no": 4,
      "email": "ann@example.com",
      "username": "Ann",
      "name": "Ann Jones",
      "status": "Active",
      "kyc": "No-KYC"
    },
    {
      "no": 5,
      "email": "mitchell@example.com",
      "username": "Mitchell",
      "name": "Mitchell Fisher",
      "status": "Active",
      "kyc": "No-KYC"
    }
  ]
}

router.get('/', (req, res) => {
  res.json(data)
})

module.exports = router