const db = require('./server/db/index');
const Product = require('./server/db/product');
const User = require('./server/db/user');

const products = [
  { title: 'Do You Dare', description: 'Ever wonder what it\'s like to be a dare-devil? Experience it firsthand without the risk.', imageUrl: 'http://3.bp.blogspot.com/-MmBixjQONj0/UNhJ0hn9_kI/AAAAAAAAC9k/Mim2UkIVnTw/s1600/article-1201105-05C97DC1000005DC-225_634x421.jpg', quantity: 10, price: 100 },
  { title: 'Spacing Out', description: 'The International Space Station is the place to be. Recycled water and air, now that is the life!', imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/15618296264_21bc1e368e_o.jpg', quantity: 10, price: 100 },
  { title: 'Enter Stage Left', description: 'Rock n roll at Madison Square Garden with your fans!', imageUrl: 'https://image.freepik.com/free-photo/rock-band-silhouettes-on-stage-at-concert_1204-416.jpg', quantity: 10, price: 100 },
  { title: 'Quack', description: 'You are the boss of rubberduck town.', imageUrl: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1497453970/rubber-duck-florentijn-hofman-DUCKY0617.jpg?itok=4Ydkg_FS', quantity: 10, price: 100 },
  { title: 'Hydra Attack', description: 'Ride circles around the mythical Hydra in an epic battle that would make Hercules jealous!', imageUrl: 'https://www.everfest.com/system/images/W1siZiIsIjIwMTYvMDkvMTQvMTkvMzIvMzUvNjg5L0J1cm5pbmdfTWFuXzIwMTZfQW5kcmV3X0pvcmdlbnNlbl9BcnRfb2ZfYnVybmluZ19tYW5fMjIuanBnIl1d/Burning_Man_2016_Andrew_Jorgensen_Art_of_burning_man_22.jpg', quantity: 10, price: 100  },
  { title: 'Clown Town', description: 'Lead a roving band of your best friends through the desert as their clown leader.', imageUrl: 'https://stuckincustoms.smugmug.com/Burning-Man/i-fPS7jhQ/0/900x517/Trey%20Ratcliff%20-%20Burning%20Man%20-%20StuckInCustoms%20DOT%20com%20%20-%2044-900x517.jpg', quantity: 10, price: 100 },
  { title: 'Cuckoo Cloud Land', description: 'You took too many drugs.', imageUrl: 'https://1.bp.blogspot.com/-pWhUJOR5ahk/WUfaUpBngXI/AAAAAAAAFzs/i1eVSNM-NQsB5lILfhDo7ovsUXzqKtj2gCLcBGAs/s1600/Copywriter.jpg', quantity: 10, price: 100 },
  { title: 'Mad Hatter\'s Tea Party', description: 'Have tea and crumpets with Johnny Depp!', imageUrl: 'https://i0.wp.com/writingstudio.co.za/wp-content/uploads/2015/10/alice-in-wonderland-throught-the-looking-glass-cast-and-story-details.jpg', quantity: 10, price: 100 },
  { title: 'Labyrinth Ball', description: 'Dance with the Goblin King, David Bowie, in a dreamy wonderland.', imageUrl: 'https://i.ytimg.com/vi/dFyufUCTCh8/maxresdefault.jpg', quantity: 10, price: 100 },
  { title: 'The Chocolate Factory', description: 'Everything is made of chocoloate!  Make sure you don\'t turn into a blueberry!', imageUrl: 'http://wfiles.brothersoft.com/t/the-chocolate-factory_72421-1920x1200.jpg', quantity: 10, price: 100 },
  { title: 'Nightmare', description: 'Wake up in your worst nightmare!', imageUrl: 'https://images1.laweekly.com/imager/u/original/8035676/abt_pp.jpg', quantity: 10, price: 100 },
  { title: 'PuppyVille', description: 'Everyone is a puppy that takes care of themselves, but you get to play with them all day!', imageUrl: 'http://www.kingwestvets.com/wp-content/uploads/2013/01/puppies-in-a-bathtub.jpg', quantity: 10, price: 100 },
  { title: 'Virtual Reality Check', description: 'Get your priorities straight.  1. Have fun!', imageUrl: 'https://regmedia.co.uk/2017/04/24/shutterstock_virtual_reality.jpg?x=1200&y=794', quantity: 10, price: 100 },
  { title: 'Matrix', description: 'You are the chosen one.', imageUrl: 'https://www.technobuffalo.com/wp-content/uploads/2016/07/matrixreloaded-470x310@2x.png', quantity: 10, price: 100 }
]

const seed = () => {
  return Promise.all(products.map(product => {
    return Product.create(product)
  } ))
}

const main = () => {
 console.log('Syncing db...');
 db.sync({ force: false })
   .then(() => {
     console.log('Seeding database...');
     return seed();
   })
   .catch(err => {
     console.log('Error while seeding');
     console.log(err.stack);
   })
   .then(() => {
     db.close();
     return null;
   });
};

main();