let articles = document.querySelectorAll('.article-item');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const headerNav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.nav-link');
const wrapArticlesList = document.querySelector('.wrap-articles-list');
const wrapArticles = document.querySelector('.wrap-articles');
const linkToList = document.querySelector('.to-list');

const slides = document.querySelectorAll('.popular-item');
const tourPrev = document.querySelector('.tour-prev');
const tourNext = document.querySelector('.tour-next');
let currentSlide = 0;


// @ts-ignore
// for (slide of slides) {
//     // @ts-ignore
//     slide.addEventListener('click', prevSlide);
//    }

tourPrev.addEventListener('click', prevSlide);
tourNext.addEventListener('click', nextSlide);
   
   
   function nextSlide() {
       slides[currentSlide].classList.remove('show');
       currentSlide = (currentSlide+1) % slides.length;
       slides[currentSlide].classList.add('show');
   }
   
   function prevSlide() {
       slides[currentSlide].classList.remove('show');
       currentSlide = (currentSlide - 1) % slides.length;
       if (currentSlide < 0) {
         currentSlide = slides.length - 1;
       }
       slides[currentSlide].classList.add('show');
   }

// бургер меню
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        headerNav.classList.remove('header-nav--opened');
    })
});

mainNavToggle.addEventListener('click', () => {
    headerNav.classList.toggle('header-nav--opened')
});


// список статей
articles.forEach((item) => {
    // @ts-ignore
    item.addEventListener('click', (evt) => {
        articles.forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
        showToArticle();
    })
});

linkToList.addEventListener('click', showToArticlesList);

// показ списка статей
function showToArticlesList () {
    wrapArticlesList.classList.remove('article-hidden');
    wrapArticles.classList.add('article-hidden');
}

// показ статьи
function showToArticle () {
    wrapArticles.classList.remove('article-hidden');
    wrapArticlesList.classList.add('article-hidden');
}



