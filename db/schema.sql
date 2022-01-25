DROP DATABASE IF EXISTS mornin;
CREATE DATABASE mornin;
USE mornin;

CREATE TABLE cities (
  id INT PRIMARY KEY AUTO_INCREMENT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  latitude DECIMAL (9, 5),
  longitude DECIMAL (9, 5)
);

CREATE TABLE news (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  url TEXT NOT NULL
);

CREATE TABLE games (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  url TEXT NOT NULL
);

INSERT INTO cities(city, state, latitude, longitude) VALUES('Raleigh', 'NC', 35.7796, -78.6382 ),
('New York City', 'NY', 40.7128, -74.0060 ),
('Los Angeles', 'CA', 34.0522, -118.2437 ),
('Chicago', 'IL', 41.8781, -87.6298 ),
('Houston', 'TX', 29.7604, -95.3698 ),
('Phoenix', 'AZ', 33.4484, -112.0740 ),
('Philadelphia', 'PA', 39.9526, -75.1652 ),
('San Antonio', 'TX', 29.4241, -98.4936 ),
('San Diego', 'CA', 32.7157, -117.1611 ),
('Dallas', 'TX', 32.7767, -96.7970 ),
('Denver', 'CO', 39.7392, -104.9903 ),
('Seattle', 'WA', 47.6062, -122.3321 ),
('Washington', 'DC', 38.9072, -77.0369 ),
('Miami', 'FL', 25.7617, -80.1918 ),
('Boston', 'MA', 42.3601, -71.0589 ),
('Atlanta', 'GA', 33.7490, -84.3880 );

INSERT INTO news(name, url) VALUES ('The New York Times', 'https://www.nytimes.com'),
('Los Angeles Times', 'https://www.latimes.com'),
('The Washington Post', 'https://www.washingtonpost.com'),
('The New York Times', 'https://www.nytimes.com'),
('The Wall Street Journal', 'https://www.wsj.com'),
('The New York Times', 'https://www.nytimes.com'),
('CNN', 'https://www.cnn.com'),
('Fox News', 'https://www.foxnews.com');

INSERT INTO games(name, url) VALUES ('The New York Times Crossword', 'https://www.nytimes.com/crosswords'),
('The New York Times Sudoku', 'https://www.nytimes.com/sudoku');
