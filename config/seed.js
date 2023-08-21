require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Manga', sortOrder: 1},
    {name: 'ComicBooks', sortOrder: 2},
    {name: 'Non-Fiction Books', sortOrder: 3},
    {name: 'Magazines', sortOrder: 4},
    {name: 'AudioBooks', sortOrder: 5},
    {name: 'Vinyls', sortOrder: 6},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'One Piece', emojiURL: 'https://cdn3.emoji.gg/emojis/4005-luffy-smug.png', category: categories[0], price: 15},
    {name: 'Hunter x Hunter', emojiURL: 'https://cdn3.emoji.gg/emojis/8247-killua-zoldyck.png', category: categories[0], price: 12},
    {name: 'Naruto', emojiURL: 'https://cdn3.emoji.gg/emojis/7515-trollnaruto.png', category: categories[0], price: 13},
    {name: 'Blue Lock', emojiURL: 'https://i.imgur.com/TxebLkbb.jpg', category: categories[0], price: 10},
    {name: 'Spider-Man', emojiURL: 'https://cdn3.emoji.gg/emojis/3373-spiderman-swing.png', category: categories[1], price: 28},
    {name: 'X-Men', emojiURL: 'https://cdn.dribbble.com/users/1044811/screenshots/3349896/wolverine-01.png', category: categories[1], price: 20},
    {name: 'Daredevil', emojiURL: 'https://cdn3.emoji.gg/emojis/2842-mv-daredevil.png', category: categories[1], price: 17},
    {name: 'Baking Cookbook', emojiURL: 'https://i.imgur.com/6SG4lIsb.jpg', category: categories[2], price: 25},
    {name: 'Atomic Habits', emojiURL: 'https://i.imgur.com/V3eZyRKb.jpg', category: categories[2], price: 22},
    {name: 'Forbes Magazine', emojiURL: 'https://i.imgur.com/P1kSaKhb.jpg', category: categories[3], price: 30},
    {name: 'Cosmopolitan', emojiURL: 'https://i.imgur.com/qksv8Wz.jpeg', category: categories[3], price: 28},
    {name: 'Wolfsong', emojiURL: 'https://i.imgur.com/rRcsL2D.jpeg', category: categories[4], price: 26},
    {name: 'Paris: The Memoir', emojiURL: 'https://i.imgur.com/mZS9LAcb.jpg', category: categories[4], price: 15},
    {name: 'Stadium Arcadium', emojiURL: 'https://i.imgur.com/zhrdsBM.jpeg', category: categories[5], price: 90},
    {name: 'Good Kid m.A.A.d City', emojiURL: 'https://i.imgur.com/jdIlgfWb.jpg', category: categories[5], price: 37},
    {name: 'Tha Carter III', emojiURL: 'https://i.imgur.com/glHIIiHb.jpg', category: categories[5], price: 45},
  ]);

  console.log(items)

  process.exit();

})();