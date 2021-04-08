const mobileBtn = document.getElementById('mobile-cta')
              nav = document.querySelector('nav')
              burgerBTN = document.querySelector('.c-humburger');


              burgerBTN.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('is-active');
    nav.classList.toggle('menu-btn');
    console.log('is-active');
})