/**
* Template Name: Folio
* Template URL: https://bootstrapmade.com/folio-bootstrap-portfolio-template/
* Updated: Aug 08 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    const removePreloader = () => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      setTimeout(() => {
        preloader.remove();
      }, 600);
    };
    document.addEventListener('DOMContentLoaded', removePreloader);
    window.addEventListener('load', removePreloader);
    // Fallback: hide preloader after 1.0 seconds anyway
    setTimeout(removePreloader, 1000);
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aosInit);
  } else {
    aosInit();
  }

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped && typeof Typed !== 'undefined') {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    if (typed_strings) {
      typed_strings = typed_strings.split(',');
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    if (typeof Swiper === 'undefined') return;
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      const configEl = swiperElement.querySelector(".swiper-config");
      if (!configEl) return;
      let config = JSON.parse(configEl.innerHTML.trim());

      if (swiperElement.classList.contains("swiper-tab")) {
        if (typeof initSwiperWithCustomPagination === 'function') {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);
  if (document.readyState === 'complete') {
    initSwiper();
  }

  /**
   * Initiate glightbox
   */
  if (typeof GLightbox !== 'undefined') {
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  }

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    if (typeof imagesLoaded === 'undefined' || typeof Isotope === 'undefined') return;

    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let activeFilterGroup = '*';
    let showAll = false;

    function getCombinedFilter() {
      if (!showAll) {
        if (activeFilterGroup === '*') {
          return ':not(.project-hidden)';
        } else {
          return activeFilterGroup + ':not(.project-hidden)';
        }
      }
      return activeFilterGroup;
    }

    let initIsotope;
    const container = isotopeItem.querySelector('.isotope-container');
    if (!container) return;

    imagesLoaded(container, function() {
      initIsotope = new Isotope(container, {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: getCombinedFilter(),
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        const currentActive = isotopeItem.querySelector('.isotope-filters .filter-active');
        if (currentActive) currentActive.classList.remove('filter-active');
        this.classList.add('filter-active');
        activeFilterGroup = this.getAttribute('data-filter');
        if (initIsotope) {
          initIsotope.arrange({
            filter: getCombinedFilter()
          });
        }
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

    // See More button handler
    const seeMoreBtn = document.getElementById('see-more-btn');
    if (seeMoreBtn) {
      seeMoreBtn.addEventListener('click', function() {
        showAll = !showAll;
        if (initIsotope) {
          initIsotope.arrange({
            filter: getCombinedFilter()
          });
        }
        if (showAll) {
          seeMoreBtn.textContent = 'See Less';
        } else {
          seeMoreBtn.textContent = 'See More Projects';
          const expSection = document.getElementById('experiences');
          if (expSection) {
            expSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Dynamic section-based image loading priority observer
   */
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;
          const images = section.querySelectorAll('img');
          images.forEach(img => {
            if (img.getAttribute('loading') === 'lazy') {
              img.setAttribute('loading', 'eager');
            }
            img.setAttribute('fetchpriority', 'high');
          });
        } else {
          const section = entry.target;
          const images = section.querySelectorAll('img');
          images.forEach(img => {
            img.setAttribute('fetchpriority', 'low');
          });
        }
      });
    }, {
      rootMargin: '150px 0px 150px 0px',
      threshold: 0.05
    });

    document.querySelectorAll('section').forEach(section => {
      sectionObserver.observe(section);
    });
  }
  /**
   * Universal Modal Trigger Handler
   */
  document.addEventListener('click', function(e) {
    const trigger = e.target.closest('[data-bs-toggle="modal"]');
    if (!trigger) return;
    
    const targetSelector = trigger.getAttribute('data-bs-target');
    if (targetSelector) {
      const modalEl = document.querySelector(targetSelector);
      if (modalEl && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
        e.preventDefault();
        const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
        modalInstance.show();
      }
    }
  });

  /**
   * Subproject Tab Switcher Handler
   */
  document.addEventListener('click', function(e) {
    const tabBtn = e.target.closest('.subproject-tab-btn');
    if (!tabBtn) return;
    
    const targetId = tabBtn.getAttribute('data-tab-target');
    if (!targetId) return;

    const navContainer = tabBtn.closest('.subproject-tab-nav');
    if (navContainer) {
      navContainer.querySelectorAll('.subproject-tab-btn').forEach(btn => btn.classList.remove('active'));
    }
    tabBtn.classList.add('active');

    const parentWrapper = tabBtn.closest('.single-column-wrapper') || document;
    parentWrapper.querySelectorAll('.subproject-tab-pane').forEach(pane => {
      pane.classList.remove('active');
      pane.querySelectorAll('video').forEach(v => v.pause());
    });

    const targetPane = document.getElementById(targetId);
    if (targetPane) {
      targetPane.classList.add('active');
      window.dispatchEvent(new Event('resize'));
      targetPane.querySelectorAll('video').forEach(v => {
        v.play().catch(function() {});
      });
    }
  });

  /**
   * Dynamic Network Particle Graph (Dots and lines interactive hero background)
   */
    function initNetworkCanvas() {
    const canvas = document.getElementById('network-canvas');
    if (!canvas || canvas.dataset.netInit) return;
    canvas.dataset.netInit = 'true';

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width, height;
    let particles = [];
    
    // RESPONSIVE PARTICLE COUNT (Optimization)
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 83;
    const maxDistance = isMobile ? 110 : 173;
    const maxDistanceSq = maxDistance * maxDistance; // SQUARED DISTANCE (Optimization)
    
    const dotOpacity = 0.28;
    const lineOpacity = 0.31;
    let mouse = { x: null, y: null, radius: 150 };
    const mouseRadiusSq = mouse.radius * mouse.radius;

    const brandPalette = {
      dots: ['rgba(84, 84, 84, ', 'rgba(51, 51, 51, ', 'rgba(184, 160, 126, '],
      line: '84, 84, 84',
      mouseLine: '184, 160, 126'
    };

    function resize() {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    if (canvas.parentElement) {
      canvas.parentElement.addEventListener('mousemove', function (e) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });

      canvas.parentElement.addEventListener('mouseleave', function () {
        mouse.x = null;
        mouse.y = null;
      });
    }

    class Particle {
      constructor() {
        this.x = Math.random() * (width || window.innerWidth);
        this.y = Math.random() * (height || 320);
        this.vx = (Math.random() - 0.5) * 0.75;
        this.vy = (Math.random() - 0.5) * 0.75;
        this.radius = Math.random() * 2.2 + 1.8;
        this.colorIndex = Math.floor(Math.random() * 3);
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < mouseRadiusSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
        }
      }

      draw() {
        const colorPrefix = brandPalette.dots[this.colorIndex];
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = colorPrefix + dotOpacity + ')';
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    let isVisible = true;
    
    // THROTTLING OBSERVER (Optimization)
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
      }, { rootMargin: '100px' });
      if (canvas.parentElement) {
        observer.observe(canvas.parentElement);
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      if (!isVisible) return; // Skip drawing and math if out of view

      ctx.clearRect(0, 0, width, height);

      // Draw connections between dots
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistanceSq) { // Squared distance check
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxDistance) * lineOpacity;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${brandPalette.line}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw connections to mouse cursor
      if (mouse.x !== null && mouse.y !== null) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < mouseRadiusSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / mouse.radius) * lineOpacity * 1.4;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.strokeStyle = `rgba(${brandPalette.mouseLine}, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
    }

    initParticles();
    animate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNetworkCanvas);
  } else {
    initNetworkCanvas();
  }

})();

// Experience section logic
const expCards = ['card-fip', 'card-smartory', 'card-apac'];
const expNavs = ['exp-nav-fip', 'exp-nav-smartory', 'exp-nav-apac'];
let currentExpIdx = 0;

function setExpActiveIndex(idx) {
    if (idx === currentExpIdx) return;
    currentExpIdx = idx;

    // Instantly switch active card with subtle 3D pop animation
    expCards.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) {
            if (i === idx) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        }
    });

    // Update active nav item
    expNavs.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) {
            if (i === idx) {
                el.classList.add('active', 'fw-bold', 'text-primary');
                el.classList.remove('text-secondary');
            } else {
                el.classList.remove('active', 'fw-bold', 'text-primary');
                el.classList.add('text-secondary');
            }
        }
    });
}
