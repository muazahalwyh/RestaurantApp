const assert = require('assert');
// const { async } = require('regenerator-runtime');

Feature('Liking Restaurants');

// eslint-disable-next-line no-unused-vars
// Scenario('test something', ({ I }) => {

// });

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

// SKENARIO UJI 1
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  // I.seeElement('.query'); // membuat test menjadi gagal
  // I.waitForElement('.restaurant-item__not__found', 30); // Waktu tunggu selama 30 detik
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

// Scenario('liking one restaurant', ({ I }) => {
//   I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

//   I.amOnPage('/');
// … kita akan mengisi uji coba berikutnya …

// pause();

// SKENARIO UJI 2
Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.wait(3);

  I.seeElement('.post_item_title a');
  I.wait(3);
  // I.click(locate('.post_item_title a').first());

  const firstRestaurant = locate('.post_item_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#likeButton');
  I.wait(3);

  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);

  I.seeElement('.post_item');
  I.wait(3);

  const likedRestaurantTitle = await I.grabTextFrom('.post_item_title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

// // SKENARIO UJI 3
// Scenario('Unliking one restaurant', async ({ I }) => {
//   I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

//   I.amOnPage('/');

//   I.seeElement('.post_item_title a');
//   // I.click(locate('.post_item_title a').first());

//   const firstRestaurant = locate('.post_item_title a').first();
//   const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
//   I.click(firstRestaurant);

//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   /* Unfavorite resto */

//   I.amOnPage('/#/favorite');
//   I.seeElement('.post_item');

//   const UnlikedRestaurantTitle = await I.grabTextFrom('.post_item_title');

//   assert.strictEqual(firstRestaurantTitle, UnlikedRestaurantTitle);

//   // I.click(UnlikedRestaurantTitle);

//   I.seeElement('.post_item_title a');
//   await I.grabTextFrom(firstRestaurant);
//   I.click(firstRestaurant);

//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   I.amOnPage('/#/favorite');
//   I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

//   // const UnlikedRestaurant = await I.grabTextFrom('.post_item');

//   // assert.strictEqual(UnlikedRestaurant, 'Tidak ada restaurant untuk ditampilkan');
// });

// Scenario('searching restaurants', async ({ I }) => {
//   I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

//   I.amOnPage('/');

//   I.seeElement('.post_item_title a');

//   const names = [];

//   for (let i = 1; i <= 3; i++) {
//     I.click(locate('.post_item_title a').at(i));
//     I.seeElement('#likeButton');
//     I.click('#likeButton');
//     names.push(await I.grabTextFrom('.post_item_title'));
//     I.amOnPage('/');
//   }

//   I.amOnPage('/#/favorite');
//   I.seeElement('#query');

//   const searchQuery = names[1].substring(1, 3);
//   const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

//   I.fillField('#query', searchQuery);
//   I.pressKey('Enter');

//   const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.post_item');
//   assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

//   matchingRestaurants.forEach(async (name, index) => {
//     const visibleTitle = await I.grabTextFrom(locate('.post_item_title').at(index + 1));
//     assert.strictEqual(name, visibleTitle);
//   });
// });
