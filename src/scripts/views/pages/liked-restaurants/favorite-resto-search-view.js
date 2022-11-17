import ItemResto from '../../templates/item-resto.js';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
      <section class= "content">
        <input id="query" type="text">
        <h2 tabindex="0" class="content_heading">Your Liked Restaurants</h2>
        <div id="restaurant-search-container">
          <div id = "restaurants" class = "cards">
          </div>
        </div>
      </section>
    `;
  }

  // getTemplate() {
  //   return `
  //     <div id="restaurant-search-container">
  //       <input id="query" type="text">
  //       <div class="restaurant-result-container">
  //         <ul class="restaurants">
  //         </ul>
  //       </div>
  //     </div>
  //   `;
  // }

  // getFavoriteRestaurantTemplate(){
  //   return `
  //     <div class = "content">
  //       <h2 class = "content__heading"> Your Liked Restaurant <h2>
  //       <div id = "restaurants" class = "restaurants">

  //       </div>
  //     </div>
  //   `;
  // }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    // let html;
    // if (restaurants.length > 0) {
    //   html = restaurants.reduce(
    //     (carry, resto) => carry.concat(`<li class = "restaurant"><span class="restaurant__name">${resto.name || '-'}</span></li>`),
    //     '',
    //   );
    // } else {
    //   html = '<div class="restaurants__not__found">Restaurant tidak ditemukan</div>';
    // }

    // document.querySelector('.restaurants').innerHTML = html;

    // document.getElementById('restaurant-search-container')
    //   .dispatchEvent(new Event('restaurants:searched:updated'));

    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(ItemResto(restaurant)), '');
    } else {
      // html = '<div class="restaurant-item__not__found"></div>';
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate(){
    return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;