let articles = document.querySelectorAll('.article-item');

articles.forEach((item) => {
    item.addEventListener('click', (evt) => {
        articles.forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    })
});
