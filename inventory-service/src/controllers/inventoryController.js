const { reserveStock } = require("../services/inventoryService");

async function reserve(req, res) {
  try {
    const { productId, quantity } = req.body;
    await reserveStock(productId, quantity);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = { reserve };
