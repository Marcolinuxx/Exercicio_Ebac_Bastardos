document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('[data-tab-button]');
    const contents = document.querySelectorAll('[data-tab-id]');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetId = this.dataset.tabButton;

            contents.forEach(content => {
                content.classList.toggle('shows__list--is-active', content.dataset.tabId === targetId);
            });

            tabs.forEach(tab => {
                tab.classList.toggle('shows__tabs__button--is-active', tab === this);
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var imageBlock = document.querySelector('.image__block');
    var footer = document.querySelector('footer');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;

        if (scrollPosition < footer.offsetTop - window.innerHeight * 0.5) {
            imageBlock.style.transform = 'translateY(' + (-scrollPosition * 0.5) + 'px)';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const headerLinks = document.querySelector('.header__links');

    menuIcon.addEventListener('click', function() {
        headerLinks.classList.toggle('header__links--show');
        menuIcon.classList.toggle('open');
    });
});
