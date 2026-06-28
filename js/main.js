(function () {
  'use strict';

  const isMobile = window.innerWidth < 768;

  const observerOptions = {
    threshold: 0.15,
    rootMargin: isMobile ? '0px' : '0px 0px -60px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('spec-item')) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.add('visible');
        }
      }
    });
  }, observerOptions);

  var observeTargets = '.product-card, .feature-card, .spec-item, .parallax-content h2, .footer-cta h2';
  document.querySelectorAll(observeTargets).forEach(function (el) {
    observer.observe(el);
  });

  /* ─── Word-by-word Brand Statement ─── */

  var brandText = document.querySelector('.brand-text');
  if (brandText) {
    var words = brandText.textContent.trim().split(/\s+/);
    brandText.innerHTML = words.map(function (w) {
      return '<span class="word">' + w + '</span>';
    }).join(' ');

    var wordSpans = brandText.querySelectorAll('.word');

    var wordObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var index = Array.from(wordSpans).indexOf(entry.target);
            setTimeout(function () {
              entry.target.classList.add('revealed');
              wordObserver.unobserve(entry.target);
            }, index * 60);
          }
        });
      },
      { threshold: 0.7, rootMargin: '0px 0px -40px 0px' }
    );

    wordSpans.forEach(function (word) {
      wordObserver.observe(word);
    });
  }

  /* ─── Counter Animation ─── */

  function animateCounter(el, target, format) {
    var duration = 1800;
    var start = performance.now();

    function update(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);

      if (format === 'kg') {
        el.textContent = (eased * target).toFixed(1) + ' kg';
      } else if (format === 'plus') {
        el.textContent = Math.floor(eased * target) + '+';
      } else {
        el.textContent = Math.floor(eased * target);
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  var specNumbers = document.querySelectorAll('.spec-number');
  var specObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var text = el.getAttribute('data-target');
          var target = parseFloat(text);
          var format = 'number';

          if (text.indexOf('kg') !== -1) {
            target = parseFloat(text);
            format = 'kg';
          } else if (text.indexOf('+') !== -1) {
            target = parseInt(text, 10);
            format = 'plus';
          }

          el.textContent = '0';
          animateCounter(el, target, format);
          specObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.4 }
  );

  specNumbers.forEach(function (el) {
    specObserver.observe(el);
  });

  /* ─── Navbar ─── */

  var navbar = document.querySelector('.navbar');
  if (navbar) {
    var navCheck = function () {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    navCheck();
    window.addEventListener('scroll', navCheck, { passive: true });
  }

  /* ─── Smooth Scroll ─── */

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
