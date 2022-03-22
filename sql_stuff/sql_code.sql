-- psql -d boardgame_dev < sql_code.sql
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS lfg;
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

ALTER TABLE players ADD COLUMN prefers_video_games BOOLEAN DEFAULT false;

-- Task 3
INSERT INTO boardgames (name, avg_rating, max_players, category)
VALUES
    ('Gloomhaven', 8.8, 4, 'Adventure'),
    ('Pandemic Legacy: Season 1', 8.62, 4, 'Cooperative'),
    ('Brass: Birmingham', 8.66, 4, 'Economic'),
    ('Terraforming Mars', 8.43, 5, 'Economic'),
    ('Twilight Imperium: Fourth Edition', 8.7, 6, 'Strategy'),
    ('Spirit Island', 8.34, 4, 'Cooperative'),
    ('Mage Knight', 8.1, 4, 'Adventure'),
    ('Rising Sun', 7.88, 5, 'Strategy');

INSERT INTO players (name, fave_category, prefers_video_games)
VALUES
    ('Alec', 'Strategy', DEFAULT),
    ('Dan', 'Cooperative', DEFAULT),
    ('Rawaha', 'Adventure', DEFAULT),
    ('Ray', 'Economic', true),
    ('Ryan', 'Strategy', DEFAULT),
    ('Brad', 'Economic', DEFAULT);

INSERT INTO reviews (content, boardgame_id)
VALUES
    ('There is nothing I love more than escaping one pandemic for another, 10/10', 2),
    ('This game is far too long!', 5),
    ('My friends and I really like this game, lots of replayability', 6),
    ('I can be a space pirate, favorite game hands down.', 5);


-- Task 4a
-- SELECT * FROM boardgames;

-- Task 4b
-- SELECT name FROM boardgames;

-- Task 4c
-- SELECT name FROM boardgames
-- WHERE max_players = 4;

-- Task 4d
-- SELECT name FROM boardgames
-- WHERE max_players BETWEEN 4 AND 5;

-- Task 4e
-- SELECT name, avg_rating FROM boardgames
-- WHERE avg_rating >= 8.5;

-- Task 4f
-- SELECT name FROM players
-- WHERE name IN ('Ray', 'Ryan');

-- Write a query that returns boardgames in alphabetical order
-- Reverse the order
-- -- ORDER BY
-- Find only the game that appears latest in the alphabet (Twilight Imperium)
-- -- LIMIT
-- Task 4g
-- SELECT * from boardgames
-- ORDER BY name DESC
-- LIMIT 1; 

-- Task 4h
-- SELECT name FROM players
-- WHERE name ILIKE '%r%';

-- SELECT name, (avg_rating * 10) AS percentage, max_players FROM boardgames;

-- Task 5a
-- UPDATE players
-- SET prefers_video_games = true
-- WHERE id IN (2, 3);

-- UPDATE boardgames
-- SET name = name || ' (Game of the Year!)'
-- WHERE id = 1;
-- ORDER BY avg_rating DESC
-- LIMIT 1;

-- Task 5b
-- DELETE FROM boardgames
-- WHERE id = 4;

-- INSERT INTO boardgames (name, avg_rating, max_players, category)
-- VALUES
-- ('Scythe', 8.5, 5, 'Strategy');

-- SELECT * FROM boardgames
-- JOIN reviews ON (reviews.boardgame_id = boardgames.id)
-- WHERE boardgames.id = 5;

create table lfg (
    id SERIAL PRIMARY KEY,
    game_id INTEGER,
    player_id INTEGER,
    FOREIGN KEY (game_id) REFERENCES boardgames,
    FOREIGN KEY (player_id) REFERENCES players
);

INSERT INTO lfg (player_id, game_id)
VALUES
    (1, 5),
    (1, 2),
    (3, 1),
    (5, 5),
    (2, 2),
    (4, 4),
    (6, 4),
    (1, 4);


SELECT boardgames.name, boardgames.id, lfg.game_id, lfg.player_id, players.id, players.name
FROM boardgames
JOIN lfg ON (lfg.game_id = boardgames.id)
JOIN players ON (lfg.player_id = players.id)
WHERE boardgames.id = 4;