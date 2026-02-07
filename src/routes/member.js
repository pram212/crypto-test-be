const express = require("express");
const router = express.Router();

const data = [
  {
    no: 1,
    email: "ronald@example.com",
    username: "Ronald",
    name: "Ronald Watson",
    status: "Active",
    kyc: "No-KYC",
    created_at: "2025-12-01",
  },
  {
    no: 2,
    email: "cody@example.com",
    username: "Cody",
    name: "Cody Cooper",
    status: "Active",
    kyc: "No-KYC",
    created_at: "2025-12-01",
  },
  {
    no: 3,
    email: "shawn@example.com",
    username: "Shawn",
    name: "Shaw Nguyen",
    status: "Active",
    kyc: "No-KYC",
    created_at: "2026-01-01",
  },
  {
    no: 4,
    email: "ann@example.com",
    username: "Ann",
    name: "Ann Jones",
    status: "Active",
    kyc: "No-KYC",
    created_at: "2026-02-01",
  },
  {
    no: 5,
    email: "mitchell@example.com",
    username: "Mitchell",
    name: "Mitchell Fisher",
    status: "Active",
    kyc: "No-KYC",
    created_at: "2026-01-01",
  },
];

router.get("/", (req, res) => {
  const month = Number(req.query.month);
  const year = Number(req.query.year);

  if (!month || !year) {
    return res.json({
      status: "success",
      message: "Retrieved all members successfully",
      data: data,
    });
  }

  const filtered = data.filter((item) => {
    const date = new Date(item.created_at + "T00:00:00");

    return date.getMonth() + 1 === month && date.getFullYear() === year;
  });

  const response = {
    status: "success",
    message: "Members retrieved successfully",
    data: filtered,
  };

  res.json(response);
});

module.exports = router;
