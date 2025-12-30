const express = require("express");
const inventoryRoutes = require("./routes/inventoryRoutes");

const app = express();
app.use(express.json());
app.use("/inventory", inventoryRoutes);

app.listen(4001, () =>
  console.log("Inventory Service running on port 4001")
);