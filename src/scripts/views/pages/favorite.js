import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import ItemResto from '../templates/item-resto';

const Favorite = {
  async render() {
    return `
    <section class="content">
      <h2 tabindex="0" class="content_heading">Your Liked Restaurants</h2>
      <div class="cards" id="restaurant_item"></div>
    </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    const restoContainer = document.querySelector('#restaurant_item');
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += ItemResto(resto);
    });
  },
};

export default Favorite;
