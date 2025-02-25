const btn = document.querySelector('.menu-button');
const nav = document.querySelector('.w-nav-menu');
const body = document.querySelector('body');
const link = document.querySelectorAll('.menu-item')
const header = document.querySelector('header');
const overlay = document.querySelector('.w-nav-overlay')

function interactiveMenu() {
    if (btn) {
        btn.addEventListener('click', interactiveBurgerMenu);
    }
    
}

document.addEventListener("click", (e) =>
    {
      if (!header.contains(e.target))
      {
        nav.classList.remove('active');
        body.classList.remove('not-scroll');
      }
});

link.forEach((evt) => {
    evt.addEventListener("click", () => {
        nav.classList.remove('active');
        body.classList.remove('not-scroll');
    })
})

function interactiveBurgerMenu () {
    if (nav.className === 'nav-menu w-nav-menu active') {
        overlay.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('not-scroll');
    } else {
        overlay.classList.add('active');
        nav.classList.add('active');
        body.classList.add('not-scroll');
    }
}

interactiveMenu();