// Connect to the MongoDB database named 'miniSpotify' running on localhost
db = connect('mongodb://localhost/miniSpotify');

// Collection: artists
// Schema:
//   - name: The name of the artist (string)
//   - dateOfBirth: The date of birth of the artist (string)
//   - genres: An array of genres associated with the artist (array of strings)
db.artists.insertMany([
    {
        name: 'Taylor Swift',
        dateOfBirth: '1989-12-13',
        genres: ['Pop', 'Country']
    },
    {
        name: 'Ed Sheeran',
        dateOfBirth: '1991-02-17',
        genres: ['Pop', 'Acoustic']
    },
    {
        name: 'Adele',
        dateOfBirth: '1988-05-05',
        genres: ['Soul', 'Pop']
    },
    {
        name: 'Beyoncé',
        dateOfBirth: '1981-09-04',
        genres: ['R&B', 'Pop']
    },
    {
        name: 'Kendrick Lamar',
        dateOfBirth: '1987-06-17',
        genres: ['Hip-Hop', 'Rap']
    },
    {
        name: 'Billie Eilish',
        dateOfBirth: '2001-12-18',
        genres: ['Pop', 'Alternative']
    },
    {
        name: 'The Weeknd',
        dateOfBirth: '1990-02-16',
        genres: ['R&B', 'Pop']
    },
    {
        name: 'Drake',
        dateOfBirth: '1986-10-24',
        genres: ['Hip-Hop', 'Rap']
    },
    {
        name: 'Dua Lipa',
        dateOfBirth: '1995-08-22',
        genres: ['Pop', 'Dance']
    },
    {
        name: 'Coldplay',
        dateOfBirth: '1996-01-16',
        genres: ['Rock', 'Alternative']
    },
    {
        name: 'Rihanna',
        dateOfBirth: '1988-02-20',
        genres: ['R&B', 'Pop', 'Dancehall']
    },
    {
        name: 'Justin Bieber',
        dateOfBirth: '1994-03-01',
        genres: ['Pop', 'R&B']
    },
    {
        name: 'Eminem',
        dateOfBirth: '1972-10-17',
        genres: ['Hip-Hop', 'Rap']
    },
    {
        name: 'Bruno Mars',
        dateOfBirth: '1985-10-08',
        genres: ['Pop', 'R&B', 'Funk']
    },
    {
        name: 'Lorde',
        dateOfBirth: '1996-11-07',
        genres: ['Pop', 'Alternative']
    },
    {
        name: 'Ariana Grande',
        dateOfBirth: '1993-06-26',
        genres: ['Pop', 'R&B']
    },
    {
        name: 'Imagine Dragons',
        dateOfBirth: '2008-01-01',
        genres: ['Rock', 'Alternative']
    },
    {
        name: 'Post Malone',
        dateOfBirth: '1995-07-04',
        genres: ['Hip-Hop', 'Rap', 'Pop']
    },
    {
        name: 'Selena Gomez',
        dateOfBirth: '1992-07-22',
        genres: ['Pop', 'Dance', 'R&B']
    },
    {
        name: 'Maroon 5',
        dateOfBirth: '1994-01-01',
        genres: ['Pop', 'Rock']
    }
]);

// Collection: songs
// Schema:
//   - title: The title of the song (string)
//   - artists: An array of artist objects containing name, dateOfBirth, and genres
//   - album: The album to which the song belongs (string)
db.songs.insertMany([
    {
        title: 'Blank Space',
        artists: [
            {
                name: 'Taylor Swift',
                dateOfBirth: '1989-12-13',
                genres: ['Pop', 'Country']
            }
        ],
        album: '1989'
    },
    {
        title: 'Shape of You',
        artists: [
            {
                name: 'Ed Sheeran',
                dateOfBirth: '1991-02-17',
                genres: ['Pop', 'Acoustic']
            }
        ],
        album: '÷ (Divide)'
    },
    {
        title: 'Hello',
        artists: [
            {
                name: 'Adele',
                dateOfBirth: '1988-05-05',
                genres: ['Soul', 'Pop']
            }
        ],
        album: '25'
    },
    {
        title: 'Crazy in Love',
        artists: [
            {
                name: 'Beyoncé',
                dateOfBirth: '1981-09-04',
                genres: ['R&B', 'Pop']
            },
            {
                name: 'Jay-Z',
                dateOfBirth: '1969-12-04',
                genres: ['Hip-Hop', 'Rap']
            }
        ],
        album: 'Dangerously in Love'
    },
    {
        title: 'HUMBLE.',
        artists: [
            {
                name: 'Kendrick Lamar',
                dateOfBirth: '1987-06-17',
                genres: ['Hip-Hop', 'Rap']
            }
        ],
        album: 'DAMN.'
    },
    {
        title: 'Bad Guy',
        artists: [
            {
                name: 'Billie Eilish',
                dateOfBirth: '2001-12-18',
                genres: ['Pop', 'Alternative']
            }
        ],
        album: 'When We All Fall Asleep, Where Do We Go?'
    },
    {
        title: 'Blinding Lights',
        artists: [
            {
                name: 'The Weeknd',
                dateOfBirth: '1990-02-16',
                genres: ['R&B', 'Pop']
            }
        ],
        album: 'After Hours'
    },
    {
        title: 'God\'s Plan',
        artists: [
            {
                name: 'Drake',
                dateOfBirth: '1986-10-24',
                genres: ['Hip-Hop', 'Rap']
            }
        ],
        album: 'Scorpion'
    },
    {
        title: 'Don\'t Start Now',
        artists: [
            {
                name: 'Dua Lipa',
                dateOfBirth: '1995-08-22',
                genres: ['Pop', 'Dance']
            }
        ],
        album: 'Future Nostalgia'
    },
    {
        title: 'Viva la Vida',
        artists: [
            {
                name: 'Coldplay',
                dateOfBirth: '1996-01-16',
                genres: ['Rock', 'Alternative']
            }
        ],
        album: 'Viva la Vida or Death and All His Friends'
    },
    {
        title: 'Diamonds',
        artists: [
            {
                name: 'Rihanna',
                dateOfBirth: '1988-02-20',
                genres: ['R&B', 'Pop', 'Dancehall']
            }
        ],
        album: 'Unapologetic'
    },
    {
        title: 'Sorry',
        artists: [
            {
                name: 'Justin Bieber',
                dateOfBirth: '1994-03-01',
                genres: ['Pop', 'R&B']
            }
        ],
        album: 'Purpose'
    },
    {
        title: 'Love the Way You Lie',
        artists: [
            {
                name: 'Eminem',
                dateOfBirth: '1972-10-17',
                genres: ['Hip-Hop', 'Rap']
            },
            {
                name: 'Rihanna',
                dateOfBirth: '1988-02-20',
                genres: ['R&B', 'Pop', 'Dancehall']
            }
        ],
        album: 'Recovery'
    },
    {
        title: '24K Magic',
        artists: [
            {
                name: 'Bruno Mars',
                dateOfBirth: '1985-10-08',
                genres: ['Pop', 'R&B', 'Funk']
            }
        ],
        album: '24K Magic'
    },
    {
        title: 'Royals',
        artists: [
            {
                name: 'Lorde',
                dateOfBirth: '1996-11-07',
                genres: ['Pop', 'Alternative']
            }
        ],
        album: 'Pure Heroine'
    },
    {
        title: 'thank u, next',
        artists: [
            {
                name: 'Ariana Grande',
                dateOfBirth: '1993-06-26',
                genres: ['Pop', 'R&B']
            }
        ],
        album: 'Thank U, Next'
    },
    {
        title: 'Radioactive',
        artists: [
            {
                name: 'Imagine Dragons',
                dateOfBirth: '2008-01-01',
                genres: ['Rock', 'Alternative']
            }
        ],
        album: 'Night Visions'
    },
    {
        title: 'Rockstar',
        artists: [
            {
                name: 'Post Malone',
                dateOfBirth: '1995-07-04',
                genres: ['Hip-Hop', 'Rap', 'Pop']
            }
        ],
        album: 'Beerbongs & Bentleys'
    },
    {
        title: 'Lose You to Love Me',
        artists: [
            {
                name: 'Selena Gomez',
                dateOfBirth: '1992-07-22',
                genres: ['Pop', 'Dance', 'R&B']
            }
        ],
        album: 'Rare'
    },
    {
        title: 'Girls Like You',
        artists: [
            {
                name: 'Maroon 5',
                dateOfBirth: '1994-01-01',
                genres: ['Pop', 'Rock']
            },
            {
                name: 'Cardi B',
                dateOfBirth: '1992-10-11',
                genres: ['Hip-Hop', 'Rap']
            }
        ],
        album: 'Red Pill Blues'
    }
]);

// Collection: popularSongs
// Schema:
//   - song: The song object containing title, artists, and album
//   - playCount: The number of times the song was played (integer)
//   - timePeriod: The specific time period during which the play count is measured (string)
db.popularSongs.insertMany([
    {
        song: {
            title: 'Blank Space',
            artists: [
                {
                    name: 'Taylor Swift',
                    dateOfBirth: '1989-12-13',
                    genres: ['Pop', 'Country']
                }
            ],
            album: '1989'
        },
        playCount: 5000,
        timePeriod: '2023-06'
    },
    {
        song: {
            title: 'Shape of You',
            artists: [
                {
                    name: 'Ed Sheeran',
                    dateOfBirth: '1991-02-17',
                    genres: ['Pop', 'Acoustic']
                }
            ],
            album: '÷ (Divide)'
        },
        playCount: 8000,
        timePeriod: '2023-06'
    },
    {
        song: {
            title: 'Hello',
            artists: [
                {
                    name: 'Adele',
                    dateOfBirth: '1988-05-05',
                    genres: ['Soul', 'Pop']
                }
            ],
            album: '25'
        },
        playCount: 4000,
        timePeriod: '2023-06'
    },
    {
        song: {
            title: 'Diamonds',
            artists: [
                {
                    name: 'Rihanna',
                    dateOfBirth: '1988-02-20',
                    genres: ['R&B', 'Pop', 'Dancehall']
                }
            ],
            album: 'Unapologetic'
        },
        playCount: 6500,
        timePeriod: '2023-06'
    },
    {
        song: {
            title: 'HUMBLE.',
            artists: [
                {
                    name: 'Kendrick Lamar',
                    dateOfBirth: '1987-06-17',
                    genres: ['Hip-Hop', 'Rap']
                }
            ],
            album: 'DAMN.'
        },
        playCount: 5500,
        timePeriod: '2023-06'
    },
    {
        song: {
            title: 'Bad Guy',
            artists: [
                {
                    name: 'Billie Eilish',
                    dateOfBirth: '2001-12-18',
                    genres: ['Pop', 'Alternative']
                }
            ],
            album: 'When We All Fall Asleep, Where Do We Go?'
        },
        playCount: 7000,
        timePeriod: '2023-06'
    },
    {
        song: {
            title: 'Radioactive',
            artists: [
                {
                    name: 'Imagine Dragons',
                    dateOfBirth: '2008-01-01',
                    genres: ['Rock', 'Alternative']
                }
            ],
            album: 'Night Visions'
        },
        playCount: 6000,
        timePeriod: '2023-06'
    },
    {
        song: {
            title: 'Don\'t Start Now',
            artists: [
                {
                    name: 'Dua Lipa',
                    dateOfBirth: '1995-08-22',
                    genres: ['Pop', 'Dance']
                }
            ],
            album: 'Future Nostalgia'
        },
        playCount: 8500,
        timePeriod: '2023-06'
    },
    {
        song: {
            title: 'Love the Way You Lie',
            artists: [
                {
                    name: 'Eminem',
                    dateOfBirth: '1972-10-17',
                    genres: ['Hip-Hop', 'Rap']
                },
                {
                    name: 'Rihanna',
                    dateOfBirth: '1988-02-20',
                    genres: ['R&B', 'Pop', 'Dancehall']
                }
            ],
            album: 'Recovery'
        },
        playCount: 5200,
        timePeriod: '2023-06'
    },
    {
        song: {
            title: 'Girls Like You',
            artists: [
                {
                    name: 'Maroon 5',
                    dateOfBirth: '1994-01-01',
                    genres: ['Pop', 'Rock']
                },
                {
                    name: 'Cardi B',
                    dateOfBirth: '1992-10-11',
                    genres: ['Hip-Hop', 'Rap']
                }
            ],
            album: 'Red Pill Blues'
        },
        playCount: 7300,
        timePeriod: '2023-06'
    }
]);