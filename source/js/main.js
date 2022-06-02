const manageMobileMenu = () => {
  const CLASS_OPEN = 'main-nav--opened';
  const CLASS_CLOSE = 'main-nav--closed';

  const mainNav = document.querySelector('.main-nav');
  const mainNavToggle = mainNav.querySelector('.main-nav__toggle');

  mainNav.classList.remove('main-nav--nojs');

  mainNavToggle.addEventListener('click', () => {
    if (mainNav.classList.contains(CLASS_CLOSE)) {
      mainNav.classList.remove(CLASS_CLOSE);
      mainNav.classList.add(CLASS_OPEN)
    } else {
      mainNav.classList.remove(CLASS_OPEN);
      mainNav.classList.add(CLASS_CLOSE);
    }
  })
}

const moveSlider = () => {
  const range = document.querySelector('.slider__range');
  const slide = document.querySelector('.slider__slide--before');
  const buttonBefore = document.querySelector('.slider__button--before');
  const buttonAfter = document.querySelector('.slider__button--after');
  const mediaQuery = window.matchMedia('(min-width: 768px)')

  mediaQuery.addEventListener('change', () => {
    if (mediaQuery.matches) {
      range.step = 1;
      range.value = 50;
    } else {
      range.step = 100;
      range.value = 0;
    }
  });

  range.oninput = () => {
    let rangeValue = Math.abs(range.value - 100);

    slide.style.width = `${rangeValue}%`;
  };

  buttonBefore.addEventListener('click', () => {
    slide.style.width = '100%';
    range.value = 0;
  });

  buttonAfter.addEventListener('click', () => {
    slide.style.width = '0';
    range.value = 100;
  })
}

manageMobileMenu();
moveSlider();
