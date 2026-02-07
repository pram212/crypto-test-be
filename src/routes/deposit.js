const express = require("express");
const router = express.Router();

const data = [
  {
    no: 1,
    deposit_id: "DEPO-IDR-041024165727",
    asset: "IDR",
    amount_nett: 95000,
    status: "rejected",
    created_at: "2025-12-04",
  },
  {
    no: 2,
    deposit_id: "DEPO-IDR-041024165727",
    asset: "IDR",
    amount_nett: 140000,
    status: "success",
    created_at: "2026-02-04",
  },
  {
    no: 3,
    deposit_id: "DEPO-BTC-041024165727",
    asset: "BTC",
    amount_nett: 0.00018809,
    status: "success",
    created_at: "2026-02-04",
  },
  {
    no: 4,
    deposit_id: "DEPO-IDR-041024165727",
    asset: "IDR",
    amount_nett: 95000,
    status: "success",
    created_at: "2026-01-04",
  },
  {
    no: 5,
    deposit_id: "DEPO-IDR-041024165727",
    asset: "IDR",
    amount_nett: 295000,
    status: "success",
    created_at: "2026-01-04",
  },
];

router.get("/", (req, res) => {
  const month = Number(req.query.month);
  const year = Number(req.query.year);

  if (!month || !year) {
    return res.json({
      status: "success",
      message: "Retrieved all deposits successfully",
      data: data,
    });
  }

  const filtered = data.filter((item) => {
    const date = new Date(item.created_at + "T00:00:00");

    return date.getMonth() + 1 === month && date.getFullYear() === year;
  });

  const response = {
    status: "success",
    message: "Deposits retrieved successfully",
    data: filtered,
  };

  res.json(response);
});

module.exports = router;
