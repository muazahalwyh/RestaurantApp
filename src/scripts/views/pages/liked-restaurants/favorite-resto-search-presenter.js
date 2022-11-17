class FavoriteRestaurantSearchPresenter {
    constructor({ favoriteRestaurants, view }) {
        this._view = view;
        this._listenToSearchRequestByUser();
        this._favoriteRestaurants = favoriteRestaurants;
    }   
    
    _listenToSearchRequestByUser() {
        // this._queryElement = document.getElementById('query');
        // this._queryElement.addEventListener('change', (event) => {
        //     this._searchRestaurant(event.target.value);
        this._view.runWhenUserIsSearching((latestQuery) => {
            this._searchRestaurant(latestQuery);
        });
        // });
    }

    async _searchRestaurant(latestQuery) {
        this._latestQuery = latestQuery.trim();
        // this._favoriteRestaurants.searchRestaurant(this._latestQuery);

        // const foundRestaurants = await this._favoriteRestaurants._searchRestaurant(this.latestQuery);
        let foundRestaurants;
        if (this.latestQuery.length > 0) {
            foundRestaurants = await this._favoriteRestaurants.searchRestaurant(this.latestQuery);
        } else {
            foundRestaurants = await this._favoriteRestaurants.getAllRestaurants();
        }

        this._showFoundRestaurants(foundRestaurants);
    }

    _showFoundRestaurants (restaurants) {
        // const html = restaurants.reduce(
        //     (carry, resto) => carry.concat(`<li class = "restaurant"><span class="restaurant__name">${resto.name || '-'}</span></li>`),
        //     '',
        // );

        // let html;

        // if (restaurants.length > 0) {
        //     html = restaurants.reduce(
        //         (carry, restaurants) => carry.concat(`<li class = "restaurant"><span class="restaurant__name">${restaurants.name || '-'}</span></li>`),
        //         '',
        //     );
        // } else {
        //     html = html = '<div class="restaurants__not__found">Restaurant tidak ditemukan</div>';
        // }

        // document.querySelector('.restaurants').innerHTML = html;

        // document.getElementById('restaurant-search-container')
        //     .dispatchEvent(new Event('restaurants:searched:updated'));
    
        // this._view.showRestaurants(restaurants);
        this._view.showFavoriteRestaurants(restaurants);
    }

    get latestQuery() {
        return this._latestQuery;
    }
}

export default FavoriteRestaurantSearchPresenter;
