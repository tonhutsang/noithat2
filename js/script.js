document.addEventListener("DOMContentLoaded", function () {
    var productLink = document.querySelector('.product-link');
    var productItem = document.querySelector('.product');

    productLink.addEventListener('click', function (event) {
        event.preventDefault();
        productItem.classList.toggle('active');
    });

    var blogLink = document.querySelector('.blog-link');
    var blogItem = document.querySelector('.blog');

    blogLink.addEventListener('click', function (event) {
        event.preventDefault();
        blogItem.classList.toggle('active');
    });

    var shopLink = document.querySelector('.shop-link');
    var shopItem = document.querySelector('.shop');

    shopLink.addEventListener('click', function (event) {
        event.preventDefault();
        shopItem.classList.toggle('active');
    });
});