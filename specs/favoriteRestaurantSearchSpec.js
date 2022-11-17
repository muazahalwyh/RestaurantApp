import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-resto-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-resto-search-view';

describe('Searching restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurant = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };
  const setRestaurantSearchContainer = () => {
    // document.body.innerHTML = `
    //     <div id="restaurant-search-container">
    //         <input id="query" type="text">
    //         <div class="restaurant-result-container">
    //             <ul class="restaurants">
    //             </ul>
    //         </div>
    //     </div>
    //     `;

    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestoIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurant('restaurant a');

      expect(presenter.latestQuery)
        .toEqual('restaurant a');
    });

    it('should ask the model to search for restaurants', () => {
      searchRestaurant('restaurant a');

      expect(favoriteRestaurants.searchRestaurant)
        .toHaveBeenCalledWith('restaurant a');
    });

    it('should show the found restaurants', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);

      expect(document.querySelectorAll('.post_item').length)
        .toEqual(1);

      presenter._showFoundRestaurants([{
        id: 1,
        name: 'Satu',
      }, {
        id: 2,
        name: 'Dua',
      }]);
      
      expect(document.querySelectorAll('.post_item').length)
        .toEqual(2);
    });

    it('should show the name of the found restaurants', () => {
      presenter._showFoundRestaurants([{
        id: 1,
        name: 'Satu',
      }]);
      expect(document.querySelectorAll('.post_item_title')
        .item(0).textContent)
        .toEqual('Satu');
    });

    it('should show - when the restaurant returned does not contain a title', (done) => {
      // document.getElementById('restaurant-search-container').addEventListener('restaurants:searched:updated', () => {
        document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        const restaurantnames = document.querySelectorAll('.post_item_title');
        expect(restaurantnames.item(0).textContent).toEqual('-');

          done();
        });

      favoriteRestaurants.searchRestaurant.withArgs('restaurant a').and.returnValues([
        { id: 444 },
      ])

      searchRestaurant('restaurant a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurant(' ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurant('    ');
      expect(presenter.latestQuery.length)
        .toEqual(0);
      
        searchRestaurant('');
        expect(presenter.latestQuery.length)
          .toEqual(0);
  
        searchRestaurant('\t');
        expect(presenter.latestQuery.length)
          .toEqual(0);
      });

      it('should show all favorite restaurants', () => {
        searchRestaurant('    ');

        expect(favoriteRestaurants.getAllRestaurants)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {

      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);

        done();
      });
      // favoriteRestaurants.searchRestaurant.withArgs('restaurant a').and.returnValues([]);
      favoriteRestaurants.searchRestaurant.withArgs('restaurant a')
        .and
        .returnValues([]);
      
      searchRestaurant('restaurant a');
    });

    it('should not show any restaurant', (done) => {

      document.getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.post_item').length)
            .toEqual(0);
        done();
      });

      // favoriteRestaurants.searchRestaurant.withArgs('restaurant a').and.returnValues([]);
      favoriteRestaurants.searchRestaurant.withArgs('restaurant a')
        .and
        .returnValues([]);
      
      searchRestaurant('restaurant a');
    });
  });
});