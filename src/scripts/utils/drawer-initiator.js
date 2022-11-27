const DrawerInitiator = {
  init({
    menu, hero, main, drawer,
  }) {
    menu.addEventListener('click', (event) => {
      drawer.classList.toggle('open');
      event.stopPropagation();
      event.preventDefault();
    });

    hero.addEventListener('click', () => {
      drawer.classList.remove('open');
    });

    main.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  },
};

export default DrawerInitiator;
