const pool = require("../db/db");

async function reserveStock(productId, quantity) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const result = await client.query(
      `UPDATE inventory
       SET reserved_stock = reserved_stock + $1
       WHERE product_id = $2
       AND (total_stock - reserved_stock) >= $1
       RETURNING product_id`,
      [quantity, productId]
    );

    if (result.rowCount === 0) {
      throw new Error("INSUFFICIENT_STOCK");
    }

    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}

module.exports = { reserveStock };
