import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import DetailResto from '../templates/detail-resto';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="cards" id="restaurant_item"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoSource.getRestaurantDetail(url.id);

    const restoContainer = document.querySelector('#restaurant_item');
    restoContainer.innerHTML += DetailResto(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        city: resto.city,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
