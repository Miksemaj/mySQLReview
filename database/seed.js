const db = require('./index');

const seed = [
  { name: 'Burgers',
    price: 6,
    rating: 9,
  },
  { name: 'Tacos',
    price: 1,
    rating: 8,
  },
  { name: 'Pizza',
    price: 9,
    rating: 9,
  },
  { name: 'Sandwich',
    price: 8,
    rating: 8,
  },
  { name: 'Steak',
    price: 30,
    rating: 10,
  }
];

function seedMe() {
  seed.forEach((food, index) => {
    db.query(`INSERT INTO Food (name, price, rating) VALUES ("${food.name}", ${food.price}, ${food.rating});`, (err, results) => {
      if (err) {
        console.log('seed failed:', err);
      } else {
        console.log('seeding done');
      }
    })
  })
  db.end();
}

seedMe();