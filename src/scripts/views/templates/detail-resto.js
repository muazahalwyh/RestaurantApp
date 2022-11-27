import CONFIG from '../../globals/config';

const DetailResto = (resto) => `
  <div class="resto">
    <h1 tabindex="0"> Detail Restaurant </h1>
    <img tabindex="0" class="resto_img" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="Gambar Suasana restoran di kota ${resto.city}"/>
    <div class="resto_info">
      <h2 tabindex="0" class="resto_name">${resto.name}</h2>
        <div class="info">
          <i class="fas fa-map-marked"></i>
          <p tabindex="0">${resto.address}, ${resto.city}</p>
        </div>
        <div class="info">
          <i class="fas fa-star"></i>
          <p tabindex="0">${resto.rating}</p>
        </div>
        <div class="info_down">
          <h4 tabindex="0">Description</h4>
          <p tabindex="0">${resto.description}</p>
        </div>
        <div class="info_down">
          <h4 tabindex="0">Categories</h4>
          <p tabindex="0">${resto.categories
    .map(
      (category) => `
                  <span tabindex="0" class="kategori">${category.name}</span>
                `,
    )
    .join('')}
          </p>
        </div>
        <div class="info_menu">
          <h4 tabindex="0" class="menus">Menus</h4>
          <div class="menus_item">
              <h3 tabindex="0"><i class="fas fa-hamburger"></i>Food</h3>
              <p tabindex="0" class="cards_menu">${resto.menus.foods
    .map(
      (food) => `
                      <span tabindex="0" class="list_menu">${food.name}</span>
                    `,
    )
    .join('')}
              </p>
          </div>
        </div>
          <div class="menus_item">
            <h3 tabindex="0"><i class="fas fa-coffee"></i>Drink</h3>
            <p tabindex="0" class="cards_menu">${resto.menus.drinks
    .map(
      (drink) => `
                    <span tabindex="0" class="list_menu">${drink.name}</span>
                  `,
    )
    .join('')}
            </p>
          </div>

          <div class="info_review">
            <h4 tabindex="0" class="review_title">Reviews</h4>
            <div class="cards">
            ${resto.customerReviews
    .map(
      (review) => `
                  <div class="review_item">
                    <p tabindex="0" class="review_date"><i class="fas fa-calendar-alt"></i>${review.date}</p>
                    <div class="review_header">
                      <p tabindex="0" class="review_name">${review.name}</p>
                      <div tabindex="0" class="review_body">${review.review}</div>
                    </div>
                  </div>
              `,
    )
    .join('')}
          </div>
        </div>
  </div>
`;

export default DetailResto;
