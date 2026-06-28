(function () {
  'use strict';

  /* ─── Router ─── */
  var routes = {};
  var currentRoute = null;
  var outlet = document.getElementById('app');

  function route(path, fn) { routes[path] = fn; }

  function resolve() {
    var hash = window.location.hash.replace(/^#/, '') || '/';
    var matched = null;
    var params = {};
    var qIdx = hash.indexOf('?');

    if (qIdx !== -1) {
      hash.substr(qIdx + 1).split('&').forEach(function (p) {
        var parts = p.split('=');
        if (parts[0]) params[parts[0]] = decodeURIComponent(parts[1] || '');
      });
      hash = hash.substr(0, qIdx);
    }

    for (var pattern in routes) {
      var regex = new RegExp('^' + pattern.replace(/:(\w+)/g, '([^/]+)') + '$');
      var m = hash.match(regex);
      if (m) {
        matched = pattern;
        var keys = (pattern.match(/:(\w+)/g) || []).map(function (k) { return k.slice(1); });
        keys.forEach(function (k, i) { params[k] = m[i + 1]; });
        break;
      }
    }

    if (!matched) { matched = '/'; params = {}; }

    currentRoute = matched;
    routes[matched](params);
    updateActiveNav();
    var main = document.getElementById('main');
    if (main) main.scrollTop = 0;
    setTimeout(observeAnimations, 50);
  }

  window.addEventListener('hashchange', resolve);
  window.addEventListener('load', resolve);

  function navigate(path) { window.location.hash = path; }

  /* ─── Helpers ─── */
  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) { if (k === 'className') e.className = attrs[k]; else if (k === 'html') e.innerHTML = attrs[k]; else if (k === 'onClick') e.addEventListener('click', attrs[k]); else e.setAttribute(k, attrs[k]); }
    if (children) { if (typeof children === 'string') e.innerHTML = children; else children.forEach(function (c) { if (typeof c === 'string') e.appendChild(document.createTextNode(c)); else if (c) e.appendChild(c); }); }
    return e;
  }

  function renderNav() {
    var nav = document.querySelector('.navbar');
    if (!nav) return;
    nav.innerHTML = '<div class="navbar-inner"><a href="#/" class="navbar-logo" aria-label="Canyon Home">' + logoHTML() + '</a><ul class="navbar-links" id="nav-links"></ul><div class="nav-actions" id="nav-actions"></div><button class="nav-mobile-toggle" id="mobile-toggle" aria-label="Menu"><span></span><span></span><span></span></button></div>';

    var links = [
      { label: 'Modelos', dropdown: CATALOG.categories.map(function (c) { return { label: c.name, href: '#/shop?cat=' + c.slug }; }) },
      { label: 'Ferramentas', dropdown: [
        { label: 'Comparador', href: '#/compare' },
        { label: 'Guia de Tamanhos', href: '#/size-guide' }
      ] },
      { label: 'Suporte', dropdown: [
        { label: 'Centro de Ajuda', href: '#/support' },
        { label: 'FAQ', href: '#/support' },
        { label: 'Garantia', href: '#/support' },
        { label: 'Devoluções', href: '#/support' }
      ] },
      { label: 'Blog', href: '#/blog' },
      { label: 'Bike Finder', href: '#/bike-finder' }
    ];

    var ul = document.getElementById('nav-links');
    links.forEach(function (l) {
      var li = el('li');
      if (l.dropdown) {
        li.className = 'nav-has-dropdown';
        var a = el('a', { href: '#', html: l.label + ' <svg class="chevron-down" width="10" height="6" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' });
        a.addEventListener('click', function (e) { e.preventDefault(); li.classList.toggle('open'); });
        var dd = el('div', { className: 'nav-dropdown' });
        l.dropdown.forEach(function (d) {
          dd.appendChild(el('a', { href: d.href, html: d.label }));
        });
        li.appendChild(a); li.appendChild(dd);
      } else {
        li.appendChild(el('a', { href: l.href, html: l.label }));
      }
      ul.appendChild(li);
    });

    var actions = document.getElementById('nav-actions');
    actions.appendChild(el('a', { href: '#/account', className: 'nav-icon', html: svgUser(), ariaLabel: 'Minha Conta' }));
    var cartBtn = el('a', { href: '#/cart', className: 'nav-icon cart-icon', html: svgCart() + '<span class="cart-badge" id="cart-badge">0</span>', ariaLabel: 'Carrinho' });
    actions.appendChild(cartBtn);

    Cart.onChange(function (items) {
      var badge = document.getElementById('cart-badge');
      if (badge) {
        var c = Cart.count();
        badge.textContent = c;
        badge.style.display = c > 0 ? 'flex' : 'none';
      }
    });

    document.getElementById('mobile-toggle').addEventListener('click', function () {
      ul.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
      document.querySelectorAll('.nav-has-dropdown.open').forEach(function (dd) {
        if (!dd.contains(e.target)) dd.classList.remove('open');
      });
    });
  }

  function renderFooter() {
    var f = document.getElementById('footer');
    if (!f) return;
    f.innerHTML = '<div class="footer-inner"><div class="footer-grid">' +
      colHTML('Modelos', CATALOG.categories.map(function (c) { return { label: c.name, href: '#/shop?cat=' + c.slug }; })) +
      colHTML('Suporte', [{ label: 'FAQ', href: '#/support' }, { label: 'Bike Finder', href: '#/bike-finder' }, { label: 'Tabela de Tamanhos', href: '#/support' }, { label: 'Garantia', href: '#/support' }, { label: 'Devoluções', href: '#/support' }]) +
      colHTML('Empresa', [{ label: 'Sobre Nós', href: '#/blog' }, { label: 'Blog', href: '#/blog' }, { label: 'Carreiras', href: '#/support' }, { label: 'CFR Team', href: '#/blog' }, { label: 'Parceiros', href: '#/support' }]) +
      colHTML('Legal', [{ label: 'Privacidade', href: '#/support' }, { label: 'Termos', href: '#/support' }, { label: 'Cookies', href: '#/support' }, { label: 'Impressum', href: '#/support' }, { label: 'Recalls', href: '#/support' }]) +
      '<div class="footer-col"><h4>Seguir Canyon</h4><div class="social-links">' +
      svgSocial('instagram', '#') + svgSocial('youtube', '#') + svgSocial('facebook', '#') + svgSocial('strava', '#') + svgSocial('tiktok', '#') +
      '</div><p class="footer-newsletter-label">Newsletter</p><form class="newsletter-form" id="newsletter-form"><input type="email" placeholder="O teu email" aria-label="Email para newsletter"><button type="submit">Subscrever</button></form>' +
      '<p class="footer-lang-label">País / Idioma</p><div class="footer-lang"><span class="lang-active">🇵🇹 Portugal (PT)</span> <a href="#">🌐 Outros países</a></div></div>' +
      '</div><div class="footer-bottom"><div class="footer-logo">' + logoHTML() + '</div><p class="footer-copy">&copy; 2026 Canyon Bicycles GmbH. Preços e especificações sujeitos a alteração.</p></div></div>';

    document.getElementById('newsletter-form') && document.getElementById('newsletter-form').addEventListener('submit', function (e) { e.preventDefault(); alert('Obrigado! Em breve receberás novidades.'); });
  }

  function updateActiveNav() {
    document.querySelectorAll('.navbar-links a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + window.location.hash);
    });
  }

  /* ─── SVG Helpers ─── */
  function logoHTML() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-153.59985 -35.80375 1331.1987 214.8225"><path d="M25.394.187c-29.314 0-34.205 24.226-9.66 54.105l41.546 50.386c14.962 18.172 28.737 32.367 34.855 37.182.17.129.336.18.582.18h42.101c-14.417-9.213-31.878-26.022-44.59-40.765L43.285 44.888c-10-12.171-8.335-18.653 3.262-17.075 5.853.796 21.905 8.591 39.55 24.83h36.195C94.022 20.834 61.045.187 25.394.187m124.812 143.028h28.946c-1.413-11.015-6.277-23.98-16.313-36.063h-31.816c11.433 13.808 16.606 24.42 19.183 36.063m485.174-38.838L589 3.065h-28.812l34.582 69.363-.942-.01-92.42-69.353h-40.953L605.27 110.18l27.823 33.008h35.012l-32.724-38.811M378.443 3.065l113.571 133.074-.95-.014L325.645 3.065h-33.503L408.71 142.002h33.296l-68.162-75.51h.944l94.536 76.696h57.89L409.658 3.065h-31.215m496.784 0l113.575 133.074-.95-.014-165.43-133.06h-33.518l116.598 138.937h33.274l-66.918-75.51h-.29l94.536 76.696H1024L906.42 3.065h-31.193m-711.717 0l71.608 138.943h29.817L210.592 40.637h.92L316.46 143.188h37.603L207.5 3.065h-43.99m576.665 98.137c12.736 14.765 30.23 31.595 44.652 40.8H742.68c-.247 0-.416-.035-.589-.161-6.134-4.831-19.918-19.049-34.906-37.224l-41.587-50.439C641.017 24.257 645.918 0 675.263 0c38.451 0 73.806 23.99 103.477 60.077l21.45 26.074c20.325 24.688 26.598 39.927 29.646 57.037h-27.56c-2.594-11.646-7.77-22.271-19.208-36.092l-30.394-36.981c-23.372-28.343-48.56-41.403-56.249-42.449-11.586-1.572-13.254 4.914-3.254 17.099l47.004 56.437"/></svg>';
  }
  function svgUser() { return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'; }
  function svgCart() { return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>'; }
  function svgStar() { return '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'; }
  function svgTruck() { return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>'; }
  function svgShield() { return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'; }
  function svgReturn() { return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>'; }
  function svgSocial(platform, url) { return '<a href="' + url + '" target="_blank" rel="noopener" aria-label="' + platform + '" class="social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg></a>'; }

  function colHTML(title, items) {
    return '<div class="footer-col"><h4>' + title + '</h4>' + items.map(function (i) { return '<a href="' + i.href + '">' + i.label + '</a>'; }).join('') + '</div>';
  }

  /* ─── Page Renders ─── */

  function renderHome() {
    var sections = [];

    sections.push(
      '<section id="hero"><div class="hero-image-wrapper"><img src="assets/images/hero.jpg" alt="Canyon" loading="eager"></div><div class="hero-content"><div class="hero-headline-group"><h1 class="hero-title">Engineered to Perform</h1><p class="hero-subtitle">Bicicletas de carbono alemãs, entregues diretamente na tua casa. Performance de classe mundial, sem intermediários.</p><div class="hero-value"><span>Envio grátis em 3-5 dias</span><span>Garantia de 6 anos</span><span>30 dias para testar</span></div><div class="hero-cta"><a href="#/shop" class="btn">Explorar Modelos</a><a href="#/bike-finder" class="btn btn--outline">Encontrar a Minha Bike</a></div></div></div><div class="scroll-indicator" aria-hidden="true"><div class="scroll-chevron"></div></div></section>'
    );

    sections.push(
      '<section id="home-categories"><div class="section-inner"><span class="section-label animate-in">Categorias</span><h2 class="section-heading animate-in d1">Explora por tipo de bicicleta</h2><div class="cat-grid">' +
        CATALOG.categories.map(function (c, i) {
          var images = { road: 'road.jpg', mtb: 'mtb.jpg', gravel: 'gravel.jpg', electric: 'electric.jpg', urban: 'urban.jpg', outlet: 'outlet.jpg' };
          return '<a href="#/shop?cat=' + c.slug + '" class="cat-card animate-in d' + (i + 1) + '"><div class="cat-card-image"><img src="assets/images/' + (images[c.slug] || 'road.jpg') + '" alt="' + c.name + '" loading="lazy"></div><div class="cat-card-body"><h3>' + c.name + '</h3><span class="cat-card-link">Ver modelos →</span></div></a>';
        }).join('') +
      '</div></div></section>'
    );

    sections.push(
      '<section id="brand"><div class="section-inner"><p class="brand-text">Cada detalhe. Cada fibra de carbono. Cada ângulo. Projetado para uma única coisa — performance pura.</p></div></section>'
    );

    sections.push(
      '<section id="features" style="min-height:auto;padding:100px 24px"><div class="section-inner"><span class="section-label animate-in">Porquê Canyon</span><h2 class="section-heading animate-in d1">Performance sem compromissos</h2><div class="features-grid">' +
      '<div class="feature-card animate-in d2"><div class="feature-icon">' + svgTruck() + '</div><h3>Entrega Rápida</h3><p>Envio para mais de 100 países com tracking em tempo real</p></div>' +
      '<div class="feature-card animate-in d3"><div class="feature-icon">' + svgShield() + '</div><h3>Garantia 6 Anos</h3><p>Quadros com garantia alargada e suporte técnico global</p></div>' +
      '<div class="feature-card animate-in d4"><div class="feature-icon">' + svgReturn() + '</div><h3>30 Dias para Testar</h3><p>Experimenta em casa. Se não for perfeita, devolvemos tudo.</p></div>' +
      '</div></div></section>'
    );

    sections.push(
      '<section id="counters"><div class="section-inner"><div class="counters-grid">' +
      '<div class="counter-item animate-in"><span class="counter-number" data-target="6.8">0</span><span class="counter-unit">kg</span><p class="counter-label">Peso mínimo (Aeroad CF SLX)</p></div>' +
      '<div class="counter-item animate-in d1"><span class="counter-number" data-target="100">0</span><span class="counter-unit">+ países</span><p class="counter-label">Com entrega direta e suporte local</p></div>' +
      '<div class="counter-item animate-in d2"><span class="counter-number" data-target="2002">0</span><span class="counter-unit"></span><p class="counter-label">Ano de fundação</p></div>' +
      '<div class="counter-item animate-in d3"><span class="counter-number" data-target="24">0</span><span class="counter-unit">+ anos</span><p class="counter-label">De inovação em carbono</p></div>' +
      '</div></div></section>'
    );

    sections.push(
      '<section id="home-testimonials" style="padding:100px 24px;background:var(--light-gray)"><div class="section-inner"><span class="section-label animate-in">Opiniões</span><h2 class="section-heading animate-in d1">O que dizem os nossos clientes</h2><div class="testimonials-grid">' +
      CATALOG.testimonials.map(function (t, i) {
        var stars = Array(Math.round(5 - (i * 0.3)) + 1).join(svgStar());
        return '<div class="testimonial-card animate-in d' + (i + 1) + '"><div class="testimonial-stars">' + stars + '</div><p>"' + t.text + '"</p><div class="testimonial-author"><strong>' + t.author + '</strong><span>' + t.role + '</span></div></div>';
      }).join('') +
      '</div></div></section>'
    );

    sections.push(
      '<section id="home-products" style="min-height:auto;padding:100px 24px"><div class="section-inner"><span class="section-label animate-in">Destaques</span><h2 class="section-heading animate-in d1">Modelos em Destaque</h2><div class="product-grid" id="featured-grid"></div><div style="text-align:center;margin-top:48px"><a href="#/shop" class="btn">Ver Catálogo Completo</a></div></div></section>'
    );

    sections.push(
      '<section id="home-blog" style="padding:100px 24px;background:var(--white)"><div class="section-inner"><span class="section-label animate-in">Blog</span><h2 class="section-heading animate-in d1">Novidades Canyon</h2><div class="blog-grid" id="home-blog-grid"></div><div style="text-align:center;margin-top:48px"><a href="#/blog" class="btn btn--link">Ver todos os artigos</a></div></div></section>'
    );

    outlet.innerHTML = sections.join('');

    brandReveal();
    animateCounters();

    var grid = document.getElementById('featured-grid');
    CATALOG.products.filter(function (p) { return p.featured; }).forEach(function (p) {
      grid.appendChild(productCardHTML(p, false));
    });

    document.querySelectorAll('#home-products .product-card').forEach(function (card, i) {
      setTimeout(function () { card.classList.add('visible'); }, i * 100);
    });

    var blogGrid = document.getElementById('home-blog-grid');
    if (blogGrid) {
      CATALOG.blog.slice(0, 3).forEach(function (post) {
        var card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = '<div class="blog-card-image"><img src="assets/images/' + post.image + '" alt="' + post.title + '" loading="lazy"></div><div class="blog-card-body"><div class="blog-meta"><span>' + post.date + '</span><span>' + post.readTime + '</span></div><h3>' + post.title + '</h3><p>' + post.excerpt + '</p><div class="blog-author">' + post.author + '</div></div>';
        blogGrid.appendChild(card);
      });
    }
  }

  function renderShop(params) {
    var cat = params.cat || 'all';
    var filtered = cat === 'all' ? CATALOG.products : CATALOG.products.filter(function (p) { return p.category === cat; });
    outlet.innerHTML =
      '<div class="shop-page"><div class="section-inner"><div class="shop-header"><span class="section-label animate-in">Catálogo</span><h1 class="section-heading animate-in d1">' + (cat === 'all' ? 'Todas as Bicicletas' : (CATALOG.categories.filter(function (c) { return c.slug === cat; })[0] || {}).name) + '</h1></div>' +
      '<div class="shop-controls animate-in d2"><div class="shop-categories" id="shop-cats">' +
      '<button class="cat-btn' + (cat === 'all' ? ' active' : '') + '" data-cat="all">Todas</button>' +
      CATALOG.categories.map(function (c) { return '<button class="cat-btn' + (cat === c.slug ? ' active' : '') + '" data-cat="' + c.slug + '">' + c.name + '</button>'; }).join('') +
      '</div></div><div class="product-grid" id="shop-grid"></div></div></div>';

    var grid = document.getElementById('shop-grid');
    filtered.forEach(function (p) {
      grid.appendChild(productCardHTML(p, true));
    });

    document.querySelectorAll('#shop-grid .product-card').forEach(function (card, i) {
      setTimeout(function () { card.classList.add('visible'); }, i * 80);
    });

    document.querySelectorAll('.cat-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        navigate('/shop?cat=' + btn.getAttribute('data-cat'));
      });
    });
  }

  function renderProduct(params) {
    var p = CATALOG.products.filter(function (pr) { return pr.id === params.id; })[0];
    if (!p) { outlet.innerHTML = '<div class="section-inner" style="text-align:center;padding:100px 24px"><h2>Produto não encontrado</h2><a href="#/shop" class="btn" style="margin-top:20px">Ver Catálogo</a></div>'; return; }

    outlet.innerHTML =
      '<div class="product-detail"><div class="section-inner"><a href="#/shop" class="back-link animate-in">← Voltar ao catálogo</a><div class="pd-layout"><div class="pd-image animate-in-scale"><img src="assets/images/' + p.image + '" alt="' + p.name + '"></div><div class="pd-info">' +
      '<span class="section-label animate-in">' + (CATALOG.categories.filter(function (c) { return c.id === p.category; })[0] || {}).name + '</span>' +
      '<h1 class="pd-title animate-in d1">' + p.name + '</h1>' +
      '<p class="pd-tagline animate-in d2">' + p.tagline + '</p>' +
      '<div class="pd-rating animate-in d3">' + Array(Math.round(p.rating)).join(svgStar()) + ' <span>' + p.rating + '</span></div>' +
      '<div class="pd-price animate-in d3"><span class="current">' + p.price + '</span>' + (p.oldPrice ? '<span class="old">' + p.oldPrice + '</span>' : '') + '</div>' +
      '<button class="btn pd-add-btn animate-in d4" data-id="' + p.id + '">Adicionar ao Carrinho</button>' +
      '<div class="pd-specs animate-in d5"><h3>Especificações</h3><table>' + Object.keys(p.specs).map(function (k) { return '<tr><td>' + k.charAt(0).toUpperCase() + k.slice(1) + '</td><td>' + p.specs[k] + '</td></tr>'; }).join('') + '</table></div>' +
      '</div></div></div></div>';

    document.querySelector('.pd-add-btn').addEventListener('click', function () {
      Cart.add(p.id);
      document.querySelector('.pd-add-btn').textContent = '✓ Adicionado';
      setTimeout(function () { document.querySelector('.pd-add-btn').textContent = 'Adicionar ao Carrinho'; }, 2000);
    });
  }

  function renderCart() {
    var items = Cart.get();
    if (!items.length) {
      outlet.innerHTML = '<div class="cart-empty"><span class="section-label animate-in">Carrinho</span><h2 class="section-heading animate-in d1">O teu carrinho está vazio</h2><p class="animate-in d2">Explora o nosso catálogo e encontra a bicicleta perfeita para ti.</p><a href="#/shop" class="btn animate-in d3" style="margin-top:24px">Ver Catálogo</a></div>';
      return;
    }

    var html = '<div class="cart-page"><div class="section-inner"><span class="section-label">Carrinho</span><h1 class="section-heading">O teu Carrinho</h1><div class="cart-layout"><div class="cart-items" id="cart-items"></div><div class="cart-summary"><h3>Resumo</h3><div class="cart-total-row"><span>Subtotal</span><span id="cart-subtotal">€0</span></div><div class="cart-total-row"><span>Portes</span><span>Grátis</span></div><div class="cart-total-row total"><span>Total</span><span id="cart-total">€0</span></div><a href="#/checkout" class="btn" style="width:100%;justify-content:center;margin-top:16px">Checkout</a><a href="#/shop" class="back-link" style="display:block;text-align:center;margin-top:12px">Continuar a comprar</a></div></div></div></div>';
    outlet.innerHTML = html;

    var list = document.getElementById('cart-items');
    var total = 0;
    items.forEach(function (ci) {
      var p = CATALOG.products.filter(function (pr) { return pr.id === ci.id; })[0];
      if (!p) return;
      var price = parseFloat(p.price.replace('€', '').replace(/\./g, '').replace(',', '.'));
      total += price * ci.qty;
      var item = el('div', { className: 'cart-item' });
      item.innerHTML = '<img src="assets/images/' + p.image + '" alt="' + p.name + '" style="width:100px;border-radius:12px"><div class="cart-item-info"><h4>' + p.name + '</h4><p>' + p.price + '</p><div class="qty-control"><button class="qty-btn" data-id="' + p.id + '" data-dir="-1">−</button><span>' + ci.qty + '</span><button class="qty-btn" data-id="' + p.id + '" data-dir="1">+</button></div></div><button class="cart-remove" data-id="' + p.id + '">✕</button>';
      list.appendChild(item);
    });

    document.getElementById('cart-subtotal').textContent = '€' + total.toFixed(2).replace('.', ',');
    document.getElementById('cart-total').textContent = '€' + total.toFixed(2).replace('.', ',');

    list.addEventListener('click', function (e) {
      var target = e.target.closest('.qty-btn');
      if (target) {
        var q = parseInt(target.parentElement.querySelector('span').textContent, 10);
        Cart.update(target.getAttribute('data-id'), q + parseInt(target.getAttribute('data-dir'), 10));
        renderCart();
      }
      if (e.target.closest('.cart-remove')) {
        Cart.remove(e.target.closest('.cart-remove').getAttribute('data-id'));
        renderCart();
      }
    });
  }

  function renderCheckout() {
    if (!Cart.get().length) { navigate('/cart'); return; }
    outlet.innerHTML =
      '<div class="checkout-page"><div class="section-inner"><span class="section-label animate-in">Checkout</span><h1 class="section-heading animate-in d1">Finalizar Encomenda</h1><div class="checkout-layout"><form class="checkout-form" id="checkout-form"><div class="checkout-section"><h3>Informações de Envio</h3><input type="text" placeholder="Nome completo" required><input type="email" placeholder="Email" required><input type="tel" placeholder="Telemóvel" required><input type="text" placeholder="Morada" required><div class="form-row"><input type="text" placeholder="Código Postal" required><input type="text" placeholder="Cidade" required></div></div><div class="checkout-section"><h3>Pagamento</h3><div class="payment-option selected"><span>💳 Cartão de Crédito</span></div><div class="payment-option"><span>📱 MB Way</span></div><div class="payment-option"><span>🏦 Transferência Bancária</span></div></div><button type="submit" class="btn" style="width:100%;justify-content:center">Confirmar Encomenda</button></form><div class="checkout-summary"><h3>Resumo</h3><div id="checkout-items"></div><div class="checkout-total"><span>Total</span><span id="checkout-total-price">€0</span></div></div></div></div></div>';

    var total = Cart.total(CATALOG.products);
    document.getElementById('checkout-total-price').textContent = '€' + total.toFixed(2).replace('.', ',');
    var list = document.getElementById('checkout-items');
    Cart.get().forEach(function (ci) {
      var p = CATALOG.products.filter(function (pr) { return pr.id === ci.id; })[0];
      if (!p) return;
      list.innerHTML += '<div class="checkout-item"><span>' + p.name + ' × ' + ci.qty + '</span><span>' + p.price + '</span></div>';
    });

    document.getElementById('checkout-form').addEventListener('submit', function (e) {
      e.preventDefault();
      Cart.clear();
      outlet.innerHTML = '<div class="checkout-success"><div style="font-size:48px;margin-bottom:16px">✓</div><h2 class="section-heading">Encomenda Confirmada!</h2><p>Receberás um email com os detalhes de envio.</p><a href="#/" class="btn" style="margin-top:24px">Voltar ao Início</a></div>';
    });
  }

  function renderBikeFinder() {
    var questions = [
      { q: 'Onde vais andar mais?', opts: ['Estrada', 'Montanha', 'Gravel / Terra', 'Cidade'] },
      { q: 'Qual o teu nível de experiência?', opts: ['Iniciante', 'Intermédio', 'Avançado', 'Profissional'] },
      { q: 'Qual o orçamento?', opts: ['Até 2.000€', '2.000–4.000€', '4.000–6.000€', '6.000€+'] },
      { q: 'O que valorizas mais?', opts: ['Velocidade', 'Conforto', 'Versatilidade', 'Durabilidade'] }
    ];
    var step = 0;
    var answers = [];

    function renderQuestion() {
      if (step >= questions.length) {
        var result = CATALOG.products.filter(function (p) { return p.featured; }).slice(0, 3);
        outlet.innerHTML = '<div class="bike-finder-result"><span class="section-label animate-in">Bike Finder</span><h2 class="section-heading animate-in d1">A bicicleta ideal para ti</h2><div class="product-grid">' +
          result.map(function (p, i) { return '<div class="product-card animate-in d' + (i + 2) + '" onclick="location.hash=\'#/product/' + p.id + '\'"><div class="product-card-image"><img src="assets/images/' + p.image + '" alt="' + p.name + '"></div><h3>' + p.name + '</h3><p class="tagline">' + p.tagline + '</p><p style="font-weight:600;font-size:1.1rem">' + p.price + '</p></div>'; }).join('') +
          '</div><a href="#/shop" class="btn animate-in d5" style="margin-top:32px">Ver Catálogo Completo</a><button class="btn btn--link animate-in d5" onclick="navigate(\'/bike-finder\')">Recomeçar</button></div>';
        return;
      }

      outlet.innerHTML = '<div class="bike-finder"><div class="section-inner"><span class="section-label">Bike Finder</span><h2 class="section-heading">Encontra a bicicleta perfeita</h2><p class="section-subtitle">Responde a algumas perguntas e nós recomendamos-te o modelo ideal.</p><div class="bf-progress"><div class="bf-bar" style="width:' + ((step / questions.length) * 100) + '%"></div></div><div class="bf-question"><h3>' + questions[step].q + '</h3><div class="bf-options">' +
        questions[step].opts.map(function (o, i) { return '<button class="bf-option" data-idx="' + i + '">' + o + '</button>'; }).join('') +
        '</div></div></div></div>';

      document.querySelectorAll('.bf-option').forEach(function (btn) {
        btn.addEventListener('click', function () {
          answers.push(parseInt(btn.getAttribute('data-idx'), 10));
          step++;
          renderQuestion();
        });
      });
    }
    renderQuestion();
  }

  function renderSupport() {
    outlet.innerHTML =
      '<div class="support-page"><div class="section-inner"><span class="section-label animate-in">Suporte</span><h1 class="section-heading animate-in d1">Como podemos ajudar?</h1>' +
      '<div class="support-grid"><div class="support-card"><div class="support-card-icon">💬</div><h3>Chat Ao Vivo</h3><p>Resposta em menos de 2 minutos</p><button class="btn btn--link" id="chat-btn">Iniciar Chat</button></div>' +
      '<div class="support-card"><div class="support-card-icon">📏</div><h3>Guia de Tamanhos</h3><p>Encontra o tamanho ideal para ti</p><a href="#/size-guide" class="btn btn--link">Ver Tabela</a></div>' +
      '<div class="support-card"><div class="support-card-icon">🔧</div><h3>Manual do Proprietário</h3><p>Guias e manuais de todos os modelos</p><a href="#" class="btn btn--link">Descarregar</a></div>' +
      '<div class="support-card"><div class="support-card-icon">📍</div><h3>Localizador de Serviço</h3><p>Rede de assistência em mais de 100 países</p><a href="#" class="btn btn--link">Encontrar</a></div>' +
      '</div><div class="faq-section"><h2 class="section-heading" style="margin-top:80px">Perguntas Frequentes</h2><div class="faq-list" id="faq-list"></div></div></div></div>' +
      '<div class="chat-widget" id="chat-widget"><div class="chat-header" id="chat-header"><span>💬 Chat Canyon</span><span id="chat-close">✕</span></div><div class="chat-body" id="chat-body"><p class="chat-msg received">Olá! Como podemos ajudar-te hoje? 🚲</p></div><div class="chat-input"><input type="text" id="chat-input" placeholder="Escreve a tua mensagem..."><button id="chat-send">→</button></div></div>';

    var fl = document.getElementById('faq-list');
    CATALOG.faq.forEach(function (f) {
      var item = el('div', { className: 'faq-item' });
      item.innerHTML = '<button class="faq-question">' + f.q + ' <span>+</span></button><div class="faq-answer"><p>' + f.a + '</p></div>';
      item.querySelector('.faq-question').addEventListener('click', function () { item.classList.toggle('open'); });
      fl.appendChild(item);
    });

    document.getElementById('chat-btn').addEventListener('click', function () {
      document.getElementById('chat-widget').classList.add('open');
    });
    document.getElementById('chat-close').addEventListener('click', function () {
      document.getElementById('chat-widget').classList.remove('open');
    });
    document.getElementById('chat-send').addEventListener('click', function () {
      var input = document.getElementById('chat-input');
      if (!input.value.trim()) return;
      var body = document.getElementById('chat-body');
      body.innerHTML += '<p class="chat-msg sent">' + input.value + '</p>';
      input.value = '';
      setTimeout(function () {
        body.innerHTML += '<p class="chat-msg received">Obrigado! Um dos nossos especialistas vai responder em breve.</p>';
        body.scrollTop = body.scrollHeight;
      }, 800);
    });
  }

  function renderBlog() {
    outlet.innerHTML = '<div class="blog-page"><div class="section-inner"><span class="section-label animate-in">Blog</span><h1 class="section-heading animate-in d1">Inside Canyon</h1><p class="section-subtitle animate-in d2">Histórias, tecnologia e paixão pelo ciclismo.</p><div class="blog-grid" id="blog-grid"></div></div></div>';
    var grid = document.getElementById('blog-grid');
    CATALOG.blog.forEach(function (post) {
      var card = el('div', { className: 'blog-card' });
      card.innerHTML = '<div class="blog-card-image"><img src="assets/images/' + post.image + '" alt="' + post.title + '" loading="lazy"></div><div class="blog-card-body"><div class="blog-meta"><span>' + post.date + '</span><span>' + post.readTime + '</span></div><h3>' + post.title + '</h3><p>' + post.excerpt + '</p><div class="blog-author">' + post.author + '</div></div>';
      grid.appendChild(card);
    });
  }

  function renderAccount() {
    outlet.innerHTML =
      '<div class="account-page"><div class="section-inner" style="text-align:center;max-width:480px"><span class="section-label">Conta</span><h1 class="section-heading">A minha Conta</h1>' +
      '<div class="account-tabs" style="display:flex;gap:0;margin:32px 0;border-radius:12px;overflow:hidden;border:1px solid #d2d2d7"><button class="account-tab active" style="flex:1;padding:12px;border:none;background:var(--dark-gray);color:var(--white);font-weight:500;cursor:pointer">Entrar</button><button class="account-tab" style="flex:1;padding:12px;border:none;background:transparent;font-weight:500;cursor:pointer">Registar</button></div>' +
      '<form id="login-form" style="text-align:left"><input type="email" placeholder="Email" required style="width:100%;padding:12px 16px;border:1px solid #d2d2d7;border-radius:12px;margin-bottom:12px;font-size:14px"><input type="password" placeholder="Password" required style="width:100%;padding:12px 16px;border:1px solid #d2d2d7;border-radius:12px;margin-bottom:20px;font-size:14px"><button type="submit" class="btn" style="width:100%;justify-content:center">Entrar</button></form>' +
      '<p style="margin-top:20px;font-size:12px;color:var(--mid-gray)">Demo — qualquer email/password funciona</p></div></div>';

    document.getElementById('login-form').addEventListener('submit', function (e) {
      e.preventDefault();
      outlet.innerHTML = '<div class="account-page"><div class="section-inner" style="max-width:800px"><span class="section-label">Conta</span><h1 class="section-heading">Olá, Ciclista!</h1>' +
        '<div class="account-dashboard" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-top:40px">' +
        '<div style="background:var(--light-gray);border-radius:16px;padding:32px;text-align:center"><div style="font-size:32px;margin-bottom:8px">📦</div><h3 style="font-weight:600;font-size:1rem">0</h3><p style="font-size:13px;color:var(--mid-gray)">Encomendas</p></div>' +
        '<div style="background:var(--light-gray);border-radius:16px;padding:32px;text-align:center"><div style="font-size:32px;margin-bottom:8px">❤️</div><h3 style="font-weight:600;font-size:1rem">2</h3><p style="font-size:13px;color:var(--mid-gray)">Favoritos</p></div>' +
        '<div style="background:var(--light-gray);border-radius:16px;padding:32px;text-align:center"><div style="font-size:32px;margin-bottom:8px">🏆</div><h3 style="font-weight:600;font-size:1rem">1.200</h3><p style="font-size:13px;color:var(--mid-gray)">KM este mês</p></div>' +
        '</div><a href="#/shop" class="btn" style="margin:32px auto 0;display:inline-flex">Explorar Modelos</a></div></div>';
    });
  }

  function productCardHTML(p, showPrice) {
    var card = el('div', { className: 'product-card' });
    card.innerHTML = (p.badge ? '<span class="product-badge">' + p.badge + '</span>' : '') +
      '<div class="product-card-image"><img src="assets/images/' + p.image + '" alt="' + p.name + '" loading="lazy"></div>' +
      '<h3>' + p.name + '</h3><p class="tagline">' + p.tagline + '</p>' +
      (showPrice ? '<p class="product-price">' + p.price + (p.oldPrice ? ' <span class="old-price">' + p.oldPrice + '</span>' : '') + '</p>' : '') +
      '<a href="#/product/' + p.id + '" class="btn btn--link">Ver Detalhes</a>';
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
    });
    return card;
  }

  function brandReveal() {
    var bt = document.querySelector('.brand-text');
    if (!bt) return;
    var words = bt.textContent.trim().split(/\s+/);
    bt.innerHTML = words.map(function (w) { return '<span class="word">' + w + '</span>'; }).join(' ');
    var spans = bt.querySelectorAll('.word');
    var wo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var idx = Array.from(spans).indexOf(entry.target);
          setTimeout(function () { entry.target.classList.add('revealed'); wo.unobserve(entry.target); }, idx * 60);
        }
      });
    }, { threshold: 0.7 });
    spans.forEach(function (w) { wo.observe(w); });
  }

  function animateCounters() {
    var els = document.querySelectorAll('.counter-number');
    if (!els.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        observer.unobserve(el);
        var target = parseFloat(el.getAttribute('data-target'));
        var current = 0;
        var duration = 1500;
        var step = Math.max(1, target / (duration / 16));
        var decimals = target % 1 === 0 ? 0 : 1;
        function tick() {
          current += step;
          if (current >= target) { el.textContent = target.toFixed(decimals).replace('.', ','); return; }
          el.textContent = current.toFixed(decimals).replace('.', ',');
          requestAnimationFrame(tick);
        }
        tick();
      });
    }, { threshold: 0.5 });
    els.forEach(function (el) { observer.observe(el); });
  }

  /* ─── Comparison Tool ─── */

  function renderCompare() {
    outlet.innerHTML = '<div class="compare-page"><div class="section-inner"><span class="section-label animate-in">Comparador</span><h1 class="section-heading animate-in d1">Comparar Bicicletas</h1><p class="section-subtitle animate-in d2">Seleciona até 3 modelos para comparar lado a lado.</p>' +
      '<div class="compare-selector" id="compare-selector"><select id="comp-sel-1"><option value="">Selecionar modelo...</option>' +
      CATALOG.products.map(function (p) { return '<option value="' + p.id + '">' + p.name + '</option>'; }).join('') +
      '</select><select id="comp-sel-2"><option value="">Selecionar modelo...</option>' +
      CATALOG.products.map(function (p) { return '<option value="' + p.id + '">' + p.name + '</option>'; }).join('') +
      '</select><select id="comp-sel-3"><option value="">Selecionar modelo...</option>' +
      CATALOG.products.map(function (p) { return '<option value="' + p.id + '">' + p.name + '</option>'; }).join('') +
      '</select></div><div class="compare-table-wrap" id="compare-table"></div></div></div>';

    var sel1 = document.getElementById('comp-sel-1');
    var sel2 = document.getElementById('comp-sel-2');
    var sel3 = document.getElementById('comp-sel-3');

    function updateCompare() {
      var ids = [sel1.value, sel2.value, sel3.value].filter(function (v) { return v; });
      var wrap = document.getElementById('compare-table');
      if (!ids.length) { wrap.innerHTML = '<p style="text-align:center;color:var(--mid-gray);padding:60px 0;font-size:14px">Seleciona pelo menos 2 modelos para comparar.</p>'; return; }
      var products = ids.map(function (id) { return CATALOG.products.filter(function (p) { return p.id === id; })[0]; }).filter(Boolean);
      var allKeys = products.reduce(function (keys, p) {
        Object.keys(p.specs).forEach(function (k) { if (keys.indexOf(k) === -1) keys.push(k); });
        return keys;
      }, []);

      var html = '<table class="compare-table"><thead><tr><th></th>';
      products.forEach(function (p) {
        html += '<th><img src="assets/images/' + p.image + '" alt="' + p.name + '" style="width:100%;border-radius:12px;margin-bottom:8px"><h4>' + p.name + '</h4><p style="font-weight:600;font-size:1.1rem">' + p.price + '</p><a href="#/product/' + p.id + '" class="btn btn--link" style="font-size:12px">Ver Detalhes</a></th>';
      });
      html += '</tr></thead><tbody>';
      html += '<tr><td>Categoria</td>' + products.map(function (p) { return '<td>' + (CATALOG.categories.filter(function (c) { return c.id === p.category; })[0] || {}).name + '</td>'; }).join('') + '</tr>';
      html += '<tr><td>Avaliação</td>' + products.map(function (p) { return '<td>' + Array(Math.round(p.rating)).join('★') + ' ' + p.rating + '</td>'; }).join('') + '</tr>';
      allKeys.forEach(function (key) {
        html += '<tr><td>' + key.charAt(0).toUpperCase() + key.slice(1) + '</td>';
        products.forEach(function (p) { html += '<td>' + (p.specs[key] || '—') + '</td>'; });
        html += '</tr>';
      });
      html += '</tbody></table>';
      wrap.innerHTML = html;
    }

    sel1.addEventListener('change', updateCompare);
    sel2.addEventListener('change', updateCompare);
    sel3.addEventListener('change', updateCompare);
  }

  /* ─── Size Guide ─── */

  function renderSizeGuide() {
    outlet.innerHTML = '<div class="size-guide-page"><div class="section-inner"><span class="section-label animate-in">Guia de Tamanhos</span><h1 class="section-heading animate-in d1">Encontra o teu tamanho</h1><p class="section-subtitle animate-in d2">Seleciona um modelo para ver a tabela de geometria e a altura recomendada.</p>' +
      '<div class="sg-selector"><select id="sg-select"><option value="">Selecionar modelo...</option>' +
      CATALOG.products.filter(function (p) { return p.sizes; }).map(function (p) { return '<option value="' + p.id + '">' + p.name + '</option>'; }).join('') +
      '</select></div><div class="sg-height-input"><label>Altura (cm):</label><input type="range" id="sg-height" min="150" max="210" value="175"><span id="sg-height-display">175 cm</span></div>' +
      '<div class="sg-result" id="sg-result"><p style="color:var(--mid-gray);font-size:14px">Seleciona um modelo para ver as recomendações de tamanho.</p></div>' +
      '<div class="sg-table-wrap" id="sg-table"></div></div></div>';

    var sel = document.getElementById('sg-select');
    var heightInput = document.getElementById('sg-height');
    var heightDisplay = document.getElementById('sg-height-display');
    var result = document.getElementById('sg-result');
    var table = document.getElementById('sg-table');

    function updateSG() {
      var id = sel.value;
      heightDisplay.textContent = heightInput.value + ' cm';
      if (!id) { result.innerHTML = '<p style="color:var(--mid-gray);font-size:14px">Seleciona um modelo para ver as recomendações.</p>'; table.innerHTML = ''; return; }
      var p = CATALOG.products.filter(function (pr) { return pr.id === id; })[0];
      if (!p || !p.sizes) return;

      var height = parseInt(heightInput.value, 10);
      var recommended = null;
      p.sizes.forEach(function (s) {
        var parts = s.height.replace('m', '').split('-');
        var min = parseFloat(parts[0]) * 100;
        var max = parseFloat(parts[1]) * 100;
        if (height >= min && height <= max) recommended = s;
      });

      result.innerHTML = recommended
        ? '<div class="sg-recommend"><span class="sg-badge">' + recommended.size + '</span><div><strong>Tamanho recomendado:</strong> ' + recommended.size + ' (' + recommended.height + ')</div></div>'
        : '<p style="color:var(--mid-gray);font-size:14px">Nenhum tamanho disponível para esta altura neste modelo.</p>';

      table.innerHTML = '<table class="sg-table"><thead><tr><th>Tamanho</th><th>Altura</th><th>Reach (mm)</th><th>Stack (mm)</th><th>Top Tube (mm)</th></tr></thead><tbody>' +
        p.sizes.map(function (s) {
          return '<tr class="' + (recommended && s.size === recommended.size ? 'recommended' : '') + '"><td>' + s.size + '</td><td>' + s.height + '</td><td>' + s.reach + '</td><td>' + s.stack + '</td><td>' + s.tTube + '</td></tr>';
        }).join('') +
        '</tbody></table>';
    }

    sel.addEventListener('change', updateSG);
    heightInput.addEventListener('input', updateSG);
  }

  /* ─── Routes ─── */
  route('/', renderHome);
  route('/shop', renderShop);
  route('/product/:id', renderProduct);
  route('/cart', renderCart);
  route('/checkout', renderCheckout);
  route('/bike-finder', renderBikeFinder);
  route('/compare', renderCompare);
  route('/size-guide', renderSizeGuide);
  route('/support', renderSupport);
  route('/blog', renderBlog);
  route('/account', renderAccount);

  /* ─── Scroll Animations ─── */
  var animObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  function observeAnimations() {
    document.querySelectorAll('.animate-in, .animate-in-scale').forEach(function (el) {
      animObserver.observe(el);
    });
  }

  /* ─── Init ─── */
  renderNav();
  renderFooter();
  observeAnimations();

  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
  }

})();
