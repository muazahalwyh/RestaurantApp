import RestoSource from '../../data/resto-source';
import ItemResto from '../templates/item-resto';

const Home = {
  async render() {
    return `
    <section id="contentMain" class="content">
      <div class="latest">
        <h1 tabindex="0" id="Katalog" class="latest_label">Restaurant di Indonesia Khas Daerah</h1>
      </div>
      <div class="cards" id="restaurant_item"></div>
    </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestoSource.getRestaurantList();
    const restoContainer = document.querySelector('#restaurant_item');
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += ItemResto(resto);
    });
  },
};

export default Home;
