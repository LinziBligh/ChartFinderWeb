

function restoredOrDefaultState(){
  //messy, need to hide this default chart away somewhere in another file!
  const savedState = localStorage.getItem("state");
  let state= JSON.parse(savedState);
    if (state) 
      return state.charts
    else
  return { chart: {
    "id": 1,
    "date": "08-01-1984",
    "start_date": "1984-01-08",
    "end_date": "1984-01-14",
    "country": "UK",
    "user_id": 13,
    "created_at": "2020-08-20T20:18:12.764Z",
    "updated_at": "2020-08-27T10:12:43.728Z",
    "songs": [
      {
        "id": 1,
        "name": "Pipes Of Peace",
        "artist": "Paul Mccartney",
        "img_url": "https://i.scdn.co/image/ab67616d0000b27392ed057542e2c0d3b9647c07",
        "spotify_id": "6SRTJV0dBrK2oNV6ZOJzgj",
        "label": "Parlophone",
        "position": 1
      },
      {
        "id": 2,
        "name": "What Is Love?",
        "artist": "Howard Jones",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273d72bea64eca7f26647f8e57a",
        "spotify_id": "1IX47gefluXmKX4PrTBCRM",
        "label": "Wea",
        "position": 2
      },
      {
        "id": 3,
        "name": "Marguerita Time",
        "artist": "Status Quo",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273bedf63e7796cfddcd42e917d",
        "spotify_id": "0aQELb2MASnvcWJWj3SXIh",
        "label": "Vertigo",
        "position": 3
      },
      {
        "id": 4,
        "name": "Tell Her About It",
        "artist": "Billy Joel",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273814cbc4746358a25c84c62e7",
        "spotify_id": "6kCJMxv445L2okuTiou1fR",
        "label": "Cbs",
        "position": 4
      },
      {
        "id": 5,
        "name": "Love Of The Common People",
        "artist": "Paul Young",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273e0126da84b670e4f81afc75e",
        "spotify_id": "6cARFkZxx2JR3JlvDzeLZc",
        "label": "Cbs",
        "position": 5
      },
      {
        "id": 6,
        "name": "Relax",
        "artist": "Frankie Goes To Hollywood",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273275774501f737e10d92adaca",
        "spotify_id": "2K22nUTdyr48JDwI5t906t",
        "label": "Ztt",
        "position": 6
      },
      {
        "id": 7,
        "name": "Victims",
        "artist": "Culture Club",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273fcca18ab11eb3894e9e1ffc9",
        "spotify_id": "1NzvJyglnqt4i4ZT5vPBPU",
        "label": "Virgin",
        "position": 7
      },
      {
        "id": 8,
        "name": "Islands In The Stream",
        "artist": "Kenny Rogers And Dolly Parton",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273a4afa2612e996d0998fb2a00",
        "spotify_id": "6dnco8haegnJYtylV26cBq",
        "label": "Rca",
        "position": 8
      },
      {
        "id": 9,
        "name": "Hold Me Now",
        "artist": "The Thompson Twins",
        "img_url": "https://i.scdn.co/image/ab67616d0000b27370205e56bcc6a7619911adff",
        "spotify_id": "0BJU4rYOfj43xHw6gvTIwE",
        "label": "Arista",
        "position": 9
      },
      {
        "id": 10,
        "name": "Only You",
        "artist": "The Flying Pickets",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273f7534e604b1a5c9d8182130d",
        "spotify_id": "4OENnoidV0h8gJV6bhrw7r",
        "label": "10",
        "position": 10
      },
      {
        "id": 11,
        "name": "My Oh My",
        "artist": "Slade",
        "img_url": "https://i.scdn.co/image/ab67616d0000b2735f53c0dbe5190a0af0fa28f3",
        "spotify_id": "3yOlyBJuViE2YSGn3nVE1K",
        "label": "Rca",
        "position": 11
      },
      {
        "id": 12,
        "name": "Thriller",
        "artist": "Michael Jackson",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273cde37cfdee48dc0eae1e2ab8",
        "spotify_id": "7azo4rpSUh8nXgtonC6Pkq",
        "label": "Epic",
        "position": 12
      },
      {
        "id": 13,
        "name": "A Rockin' Good Way",
        "artist": "Shaky And Bonnie",
        "img_url": "https://i.scdn.co/image/ab67616d0000b27342f5ba45e767d2c157ce2ec4",
        "spotify_id": "4ydSzWwxqtNdP4VPfQe8bf",
        "label": "Epic",
        "position": 13
      },
      {
        "id": 14,
        "name": "Rat Rapping (brilliant Isn't It)",
        "artist": "Roland Rat Superstar",
        "img_url": "/img/60x60.gif",
        "spotify_id": "",
        "label": "Rodent",
        "position": 14
      },
      {
        "id": 15,
        "name": "Straight Ahead",
        "artist": "Kool And The Gang",
        "img_url": "https://i.scdn.co/image/ab67616d0000b27381d6599ea6305319570f1457",
        "spotify_id": "2hnXPU065OUTJo3orgiOWh",
        "label": "De-lite",
        "position": 15
      },
      {
        "id": 16,
        "name": "Uptown Girl",
        "artist": "Billy Joel",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273814cbc4746358a25c84c62e7",
        "spotify_id": "5zA8vzDGqPl2AzZkEYQGKh",
        "label": "Cbs",
        "position": 16
      },
      {
        "id": 17,
        "name": "Let's Stay Together",
        "artist": "Tina Turner",
        "img_url": "https://i.scdn.co/image/ab67616d0000b2732c3ecdbc368a97ad038f640c",
        "spotify_id": "63xdwScd1Ai1GigAwQxE8y",
        "label": "Capitol",
        "position": 17
      },
      {
        "id": 18,
        "name": "That's Livin' Alright (from 'auf Wiedersehen Pet')",
        "artist": "Joe Fagin",
        "img_url": "/img/60x60.gif",
        "spotify_id": "",
        "label": "Towerbell",
        "position": 18
      },
      {
        "id": 19,
        "name": "Bird Of Paradise",
        "artist": "Snowy White",
        "img_url": "https://i.scdn.co/image/ab67616d0000b2734b60a62bcf083f014eb86b32",
        "spotify_id": "0TIjhvcvL0FV1NhOKMW4kd",
        "label": "Towerbell",
        "position": 19
      },
      {
        "id": 20,
        "name": "Many Rivers To Cross",
        "artist": "Ub40",
        "img_url": "https://i.scdn.co/image/ab67616d0000b27353ead70b80f92eae59f9f18c",
        "spotify_id": "1dZxI6OuzwJ283y3gOU1Kq",
        "label": "Dep International",
        "position": 20
      },
      {
        "id": 21,
        "name": "Move Over Darling",
        "artist": "Tracey Ullman",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273f2ee02ef38c965d5ebe540fa",
        "spotify_id": "3cjOGPcrFpBseML7Xll49c",
        "label": "Stiff",
        "position": 21
      },
      {
        "id": 22,
        "name": "Running With The Night",
        "artist": "Lionel Richie",
        "img_url": "https://i.scdn.co/image/ab67616d0000b2737ebe4ccb79ca0dc76356b9bb",
        "spotify_id": "1dJX2lSiKGbkjKMB9PJuBq",
        "label": "Motown",
        "position": 22
      },
      {
        "id": 23,
        "name": "Sweet Surrender",
        "artist": "Rod Stewart",
        "img_url": "https://i.scdn.co/image/ab67616d0000b2739469c3ab051994ec802574a6",
        "spotify_id": "46ShsS3tyqJAJdxUjPezdI",
        "label": "Warner Brothers",
        "position": 23
      },
      {
        "id": 24,
        "name": "The Way You Are",
        "artist": "Tears For Fears",
        "img_url": "https://i.scdn.co/image/ab67616d0000b27378c6c624a95d1bd02ba1fa02",
        "spotify_id": "7BqBn9nzAq8spo5e7cZ0dJ",
        "label": "Mercury",
        "position": 24
      },
      {
        "id": 25,
        "name": "2000 Miles",
        "artist": "The Pretenders",
        "img_url": "https://i.scdn.co/image/ab67616d0000b2735436a01d3b621036889cffe6",
        "spotify_id": "5wTM2Bm8phDwHAuOsfBwhU",
        "label": "Real",
        "position": 25
      },
      {
        "id": 26,
        "name": "Please Don't Fall In Love",
        "artist": "Cliff Richard",
        "img_url": "https://i.scdn.co/image/ab67616d0000b27335b9e1474e856caf95025346",
        "spotify_id": "1mVVMcyqNxjWR9HST0ICdl",
        "label": "Emi",
        "position": 26
      },
      {
        "id": 27,
        "name": "Club Fantastic Megamix",
        "artist": "Wham!",
        "img_url": "https://d35iaml2i6ojwd.cloudfront.net/img/small?url=http://ecx.images-amazon.com/images/I/613RkMyqcCL.jpg",
        "spotify_id": "",
        "label": "Innervision",
        "position": 27
      },
      {
        "id": 28,
        "name": "Love Is A Wonderful Colour",
        "artist": "Icicle Works",
        "img_url": "https://i.scdn.co/image/ab67616d0000b2732a581f863ddb9f490a18c151",
        "spotify_id": "2i4iWilAU1AYjOVmR2xJxd",
        "label": "Beggars Banquet",
        "position": 28
      },
      {
        "id": 29,
        "name": "Cry Just A Little Bit",
        "artist": "Shakin' Stevens",
        "img_url": "https://i.scdn.co/image/ab67616d0000b2738bfe0ad57905aa16f7de194f",
        "spotify_id": "4e29ZclZ53NZaKFmGCctck",
        "label": "Epic",
        "position": 29
      },
      {
        "id": 30,
        "name": "I Can Help",
        "artist": "Elvis Presley",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273d6c066b8cb1cf84f7f9a8ace",
        "spotify_id": "4oW1lGOw5Q5OLvoJv92qoE",
        "label": "Rca",
        "position": 30
      },
      {
        "id": 31,
        "name": "Calling Your Name",
        "artist": "Marilyn",
        "img_url": "https://i.scdn.co/image/ab67616d0000b27308ba0cbb757c17eeb54db761",
        "spotify_id": "65UsbB9vbgeUn2HZOcKLrJ",
        "label": "Mercury",
        "position": 31
      },
      {
        "id": 32,
        "name": "King Of Pain",
        "artist": "The Police",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273c8e97cafeb2acb85b21a777e",
        "spotify_id": "1V15l05snHYHYVxerjMFGo",
        "label": "A&m",
        "position": 32
      },
      {
        "id": 33,
        "name": "Say Say Say",
        "artist": "Paul Mccartney And Michael Jackson",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273a866f3dcb0b55e0f6eee30ac",
        "spotify_id": "4InXjGfCi4hJVWlqPuY6Im",
        "label": "Parlophone",
        "position": 33
      },
      {
        "id": 34,
        "name": "Read 'em And Weep",
        "artist": "Barry Manilow",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273bfaa44ed2bb498bea1ce53e1",
        "spotify_id": "5kHa1nNydDex7dx7K8VRgc",
        "label": "Arista",
        "position": 34
      },
      {
        "id": 35,
        "name": "Karma Chameleon",
        "artist": "Culture Club",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273c7d7cdad0c2ffa5620129ee8",
        "spotify_id": "2wSAWEYUHkt92X4SBAPqZE",
        "label": "Virgin",
        "position": 35
      },
      {
        "id": 36,
        "name": "Wishful Thinking",
        "artist": "China Crisis",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273447289301b37e205337ddd61",
        "spotify_id": "06Xh1KvQofFghlSt33mFjc",
        "label": "Virgin",
        "position": 36
      },
      {
        "id": 37,
        "name": "That's All",
        "artist": "Genesis",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273df591cca1b66a6f3d27b3800",
        "spotify_id": "2zFdsAIk9r2Mi7Lmm1w3sM",
        "label": "Charisma/virgin",
        "position": 37
      },
      {
        "id": 38,
        "name": "I Am What I Am",
        "artist": "Gloria Gaynor",
        "img_url": "https://i.scdn.co/image/ab67616d0000b27374a9415776fe535089e85cf3",
        "spotify_id": "4L9sdN5l6PvW3EZyP6sY7j",
        "label": "Chrysalis",
        "position": 38
      },
      {
        "id": 39,
        "name": "Where Is My Man",
        "artist": "Eartha Kitt",
        "img_url": "https://i.scdn.co/image/ab67616d0000b2731a3903c1aa8122f7720f5d71",
        "spotify_id": "6mcxQ1Y3uQRU0IHsvdNLH1",
        "label": "Record Shack",
        "position": 39
      },
      {
        "id": 40,
        "name": "Give Me More Time",
        "artist": "Whitesnake",
        "img_url": "https://i.scdn.co/image/ab67616d0000b273e5f45090e84f2c416eb343fd",
        "spotify_id": "3vIaH2gly6zqfQOBS9W2sF",
        "label": "Liberty",
        "position": 40
      }
    ]
  }, requesting: false, date: "1984-1-8", birthday: false, loggedIn: false, user: {} }

}


export default (
  state = restoredOrDefaultState(),
  action
) => {
  switch (action.type) {
    case "START_FETCHING_CHART_REQUEST":
      return {
        ...state,
        requesting: true,
      };

    case "ADD_CHART":
      return {
        ...state,
        chart: action.chart,
        requesting: false,
        birthday: false,
        date: action.chart.date,
      };

    case "START_FETCHING_BIRTHDAY_REQUEST":
      return {
        ...state,
        requesting: true,
      };

    case "ADD_BIRTHDAY":
      return {
        ...state,
        chart: action.chart,
        requesting: false,
        date: action.chart.date,
        birthday: true,
      };

    case "START_POSTING_SIGNUP_REQUEST":
      return {
        ...state,
        requesting: true
      };

      case "ADD_USER":
      return {
        ...state, user: action.user,
        requesting: false,
        loggedIn: true,
      };

      case "START_POSTING_LOGIN_REQUEST":
      return {
        ...state,
        requesting: true
      };

      case "SAVE_CHART_TO_USER":
        console.log(action.user)
        return {
          ...state,
          user: action.user
        };

        //these are identical, merge together??

        case "REMOVE_CHART_FROM_USER":
        console.log(action.user)
        return {
          ...state,
          user: {
            ...state.user,
            charts: action.user.charts
          }
        };


    default:
      return state;
  }
};




