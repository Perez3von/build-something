DROP TABLE IF EXISTS mytable;

CREATE TABLE mytable (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  quantity INTEGER CHECK (quantity > 0)
)