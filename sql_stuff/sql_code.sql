-- psql -d boardgame_dev < sql_code.sql
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS boardgames;  
DROP TABLE IF EXISTS players;

-- Task 2a
CREATE TABLE boardgames (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    avg_rating NUMERIC(3, 2) NOT NULL,  --10.0, 5.67, 1.83, 100
    max_players INTEGER NOT NULL,
    category VARCHAR(50)
);

-- Task 2b
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    fave_category VARCHAR(50)
);

-- Task 2c
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    boardgame_id INTEGER REFERENCES boardgames(id)
);