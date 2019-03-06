export const open = () => {
  const navbarBurgers = [...document.querySelectorAll('.navbar-burger')]

  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const _target = document.getElementById(target);

        el.classList.toggle('is-active');
        _target.classList.toggle('is-active');
      });
    });
  }
}
