CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  price NUMERIC NOT NULL,
  fuel_type VARCHAR(20) NOT NULL,
  mileage INT NOT NULL,
  transmission VARCHAR(20) NOT NULL,
  owner_type VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(200) NOT NULL,
  user_type VARCHAR(10) CHECK (user_type IN ('buyer', 'dealer'))
);
