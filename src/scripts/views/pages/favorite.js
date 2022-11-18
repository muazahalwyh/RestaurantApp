import FavoriteRestoIdb from '../../data/favorite-resto-idb';
// import ItemResto from '../templates/item-resto';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-resto-search-presenter';
import FavoriteRestoSearchView from './liked-restaurants/favorite-resto-search-view';
import FavoriteRestoShowPresenter from './liked-restaurants/favorite-resto-show-presenter';

const view = new FavoriteRestoSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    // const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    // const restoContainer = document.querySelector('#restaurant_item');
    // restaurants.forEach((resto) => {
    //   restoContainer.innerHTML += ItemResto(resto);
    // });

    new FavoriteRestoShowPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });
  },
};

export default Favorite;
