import CONFIG from '../../globals/config';

const ItemResto = (resto) => `
<article class="post_item">
  <div class="content_item">
    <img tabindex="0" class="post_item_thumbnail" alt="Gambar Suasana restoran di kota ${resto.city}" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}">
    <p tabindex="0" class="post_item_city"> Kota : ${resto.city}</p>  
  </div>
  <div class="post_item_content">
    <div class="post_item_flex">
      <h2 tabindex="0" class="post_item_title"><a href="/#/detail/${resto.id}">${resto.name}</a></h2>
      <span tabindex="0" class="post_item_rating"><i class="fas fa-star"></i>${resto.rating}</span>
    </div>
    <p tabindex="0" class="post_item_description">${resto.description}</p>
  </div>
</article>
`;

export default ItemResto;
