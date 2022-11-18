const assert = require('assert');

Feature('UnLiking Restaurants');

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

// SKENARIO UJI 2
Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.post_item_title a');
  I.wait(3);
  // I.click(locate('.post_item_title a').first());

  const firstRestaurant = locate('.post_item_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.wait(3);
  I.click('#likeButton');
  I.wait(3);

  /* Unfavorite resto */

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.post_item');
  I.wait(3);

  const UnlikedRestaurantTitle = await I.grabTextFrom('.post_item_title');

  assert.strictEqual(firstRestaurantTitle, UnlikedRestaurantTitle);

  // I.click(UnlikedRestaurantTitle);

  I.seeElement('.post_item_title a');
  await I.grabTextFrom(firstRestaurant);
  I.wait(3);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(3);

  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  // const UnlikedRestaurant = await I.grabTextFrom('.post_item');

  // assert.strictEqual(UnlikedRestaurant, 'Tidak ada restaurant untuk ditampilkan');
});
