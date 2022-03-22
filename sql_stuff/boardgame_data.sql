-- INSERT INTO boardgames (name, avg_rating, max_players, category)
-- VALUES
--     ('Gloomhaven', 8.8, 4, 'Adventure'),
--     ('Pandemic Legacy: Season 1', 8.62, 4, 'Cooperative'),
--     ('Brass: Birmingham', 8.66, 4, 'Economic'),
--     ('Terraforming Mars', 8.43, 5, 'Economic'),
--     ('Twilight Imperium: Fourth Edition', 8.7, 6, 'Strategy'),
--     ('Spirit Island', 8.34, 4, 'Cooperative'),
--     ('Mage Knight', 8.1, 4, 'Adventure'),
--     ('Rising Sun', 7.88, 5, 'Strategy');

-- INSERT INTO players (name, fave_category, prefers_video_games)
-- VALUES
--     ('Alec', 'Strategy', DEFAULT),
--     ('Dan', 'Cooperative', DEFAULT),
--     ('Rawaha', 'Adventure', DEFAULT),
--     ('Ray', 'Economic', true),
--     ('Ryan', 'Strategy', DEFAULT),
--     ('Brad', 'Economic', DEFAULT);

-- INSERT INTO reviews (content, boardgame_id)
-- VALUES
--     ('There is nothing I love more than escaping one pandemic for another, 10/10', 2),
--     ('This game is far too long!', 5),
--     ('My friends and I really like this game, lots of replayability', 6),
--     ('I can be a space pirate, favorite game hands down.', 5);

-- For Task 6 only - 

-- INSERT INTO lfg (player_id, game_id)
-- VALUES
--     (1, 5),
--     (1, 2),
--     (3, 1),
--     (5, 5),
--     (2, 2),
--     (4, 4),
--     (6, 4),
--     (1, 4);