function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length > 0) {
    const middleTop = window.innerHeight * 0.6;

    function handleScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const inSectionVisible = sectionTop - middleTop < 0;
        if (inSectionVisible) section.classList.add('active');
        else {
          section.classList.remove('active');
        }
      });
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }
}

initAnimationScroll();

function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  linksInternos.forEach((link) => {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    link.addEventListener('click', scrollToSection);
  });
}

initScrollSmooth();
