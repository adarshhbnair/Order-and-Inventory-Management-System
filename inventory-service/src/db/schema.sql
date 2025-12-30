CREATE TABLE IF NOT EXISTS inventory (
  product_id INT PRIMARY KEY,
  total_stock INT NOT NULL,
  reserved_stock INT DEFAULT 0
);
