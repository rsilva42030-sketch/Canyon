# Canyon — Website Cinematográfico Estilo Apple Store

Redesign completo do website Canyon com estética **Clean Minimal** — fundo branco, espaçamento generoso, micro-animações suaves e tons neutros com acentos de cor. Inspiração direta no Apple Store.

---

## Visão Geral

| Aspeto | Detalhe |
|---|---|
| **Marca** | Canyon — bicicletas de performance de classe mundial |
| **Estética** | Clean Minimal (Apple Store) |
| **Propostas de Valor** | Carbono de Alta Performance · Fit & Geometry Perfeitos · Suporte Técnico Global |
| **CTA Principal** | "Explorar Modelos" |
| **Stack** | HTML + CSS + JavaScript vanilla (sem frameworks) |

---

## Arquitetura de Secções (Single Page, Scroll-Driven)

O website será uma landing page de scroll contínuo com **7 secções cinematográficas**, cada uma ocupando pelo menos `100vh`:

### 1. **Hero Section** — Impacto Imediato
- Imagem full-bleed de uma Canyon em fundo branco limpo
- Título animado com reveal letter-by-letter: *"Engineered to Perform"*
- Subtítulo fade-in: *"Bicicletas de classe mundial. Direto a ti."*
- CTA button com hover premium: **"Explorar Modelos →"**
- Scroll indicator animado (chevron pulsante)

### 2. **Brand Statement** — Texto Cinematográfico
- Frase grande que aparece palavra a palavra com scroll (scroll-triggered text reveal)
- *"Cada detalhe. Cada fibra de carbono. Cada ângulo. Projetado para uma única coisa — performance pura."*
- Tipografia oversized (clamp responsive), tracking largo

### 3. **Product Showcase** — Destaque Visual
- 3 cards de produto (Road / MTB / Gravel) com imagens geradas
- Hover: scale sutil + sombra elevada + cor de destaque
- Cada card com nome do modelo, tagline e botão "Descobrir"
- Animação de entrada staggered (cada card entra com delay)

### 4. **Features / Propostas de Valor** — Cards Interativos
- 3 blocos com ícones SVG animados:
  - 🏗️ **Carbono de Alta Performance** — *"Quadros monocoque em fibra de carbono de grau aeroespacial"*
  - 📐 **Fit & Geometry Perfeitos** — *"Sistema de sizing proprietário para o encaixe ideal"*
  - 🌍 **Suporte Técnico Global** — *"Rede de serviço em mais de 100 países"*
- Animação: cada card faz fade-in + slide-up ao entrar no viewport
- Fundo cinza claro (`#F5F5F7` — tom Apple) para contraste

### 5. **Parallax Image Break** — Momento Cinematográfico
- Imagem fullscreen com parallax de um ciclista em ação
- Texto overlay bold: *"Born in Koblenz. Built for the World."*
- Efeito parallax com `background-attachment: fixed` ou transform via JS

### 6. **Specs / Engineering** — Detalhes Técnicos
- Layout split: imagem à esquerda, specs à direita
- Números animados (counter up) ao entrar no viewport:
  - **< 6.8 kg** — Peso do quadro
  - **100+** — Países com suporte
  - **1996** — Ano de fundação
- Animação de counter com easing suave

### 7. **Footer / CTA Final**
- CTA repetido: *"Pronto para a próxima aventura?"*
- Botão "Explorar Modelos" com animação premium
- Links secundários: About · Contact · Instagram · Careers
- Logo Canyon SVG em cinza suave
- © 2026 Canyon Bicycles GmbH

---

## Design System

### Tipografia
```
Headings: "Inter", weight 700-900, tracking -0.02em
Body: "Inter", weight 400-500
Sizes: clamp() responsivo para todos os tamanhos
```

### Paleta de Cores
```
--white:       #FFFFFF
--off-white:   #FAFAFA
--light-gray:  #F5F5F7    (Apple signature gray)
--mid-gray:    #86868B
--dark-gray:   #1D1D1F
--black:       #000000
--accent:      #E34726    (Canyon brand orange-red)
--accent-hover:#C73D20
```

### Animações
- **Intersection Observer API** para trigger de animações ao scroll
- **CSS `@keyframes`** para micro-animações (fade, slide, scale)
- **`scroll-timeline`** experimental OU fallback JS para text reveal
- **Smooth scroll** nativo com `scroll-behavior: smooth`
- Todas as transições com `cubic-bezier(0.25, 0.1, 0.25, 1)` para feel premium

### Spacing
```
Section padding: clamp(80px, 10vw, 160px)
Content max-width: 1200px
Grid gap: 32px
```

---

## Estrutura de Ficheiros

```
c:\Canyon\
├── Canyon_logo.svg          (existente)
├── index.html               [NEW]
├── css/
│   └── style.css            [NEW]
├── js/
│   └── main.js              [NEW]
└── assets/
    └── images/              [NEW] (imagens geradas via IA)
```

---

## Proposed Changes

### HTML Structure

#### [NEW] [index.html](file:///c:/Canyon/index.html)
- Documento HTML5 semântico com todas as 7 secções
- Meta tags SEO completas (title, description, Open Graph)
- Google Fonts (Inter) via `<link>`
- Todos os elementos com IDs únicos para testing
- Estrutura: `<header>` + `<main>` (7 `<section>`) + `<footer>`

---

### CSS Design System

#### [NEW] [style.css](file:///c:/Canyon/css/style.css)
- CSS custom properties (variáveis de cor, spacing, timing)
- Reset/normalize integrado
- Layout com CSS Grid e Flexbox
- Animações `@keyframes`: fadeIn, slideUp, scaleIn, textReveal
- Media queries para responsividade (mobile-first)
- Classes utilitárias para animações triggered por JS
- Pseudo-elementos para detalhes decorativos

---

### JavaScript Interactions

#### [NEW] [main.js](file:///c:/Canyon/js/main.js)
- **Intersection Observer** — detecta secções no viewport, adiciona classes de animação
- **Text Reveal** — anima cada palavra do Brand Statement com base no scroll position
- **Counter Animation** — anima números da secção Specs com requestAnimationFrame
- **Smooth Scroll** — navegação suave ao clicar no CTA
- **Navbar** — background transition ao scroll (transparente → branco)
- **Parallax** — efeito parallax na secção de imagem

---

### Assets

#### [NEW] assets/images/
- 4 imagens geradas por IA:
  1. **Hero** — Bicicleta Canyon de estrada em fundo branco clean
  2. **Road Bike** — Canyon road bike (card de produto)
  3. **MTB** — Canyon mountain bike (card de produto)
  4. **Gravel** — Canyon gravel bike (card de produto)
  5. **Parallax** — Ciclista em paisagem épica

---

## Animações Detalhadas

| Secção | Animação | Trigger |
|---|---|---|
| Hero | Letter-by-letter title reveal | Page load |
| Hero | Fade-in subtitle + CTA | After title (0.8s delay) |
| Hero | Scroll indicator pulse | Loop infinito |
| Brand Statement | Word-by-word opacity reveal | Scroll position |
| Product Cards | Staggered slide-up + fade-in | Intersection Observer |
| Features | Slide-up + fade-in (staggered) | Intersection Observer |
| Parallax | Background parallax | Scroll position |
| Specs | Counter animation (0 → valor) | Intersection Observer |
| Footer CTA | Scale-in | Intersection Observer |
| Navbar | Background opacity transition | Scroll > 100px |

---

## Verification Plan

### Manual Verification
1. Abrir `index.html` no browser via Live Server
2. Verificar todas as 7 secções renderizam corretamente
3. Testar scroll animations — cada secção anima ao entrar no viewport
4. Testar responsividade em 3 breakpoints (mobile 375px, tablet 768px, desktop 1440px)
5. Verificar hover states em todos os botões e cards
6. Confirmar que o parallax funciona suavemente
7. Testar navegação smooth scroll via CTA

> [!IMPORTANT]
> **Imagens**: Vou gerar 4-5 imagens via IA para preencher o website. Serão imagens de alta qualidade de bicicletas em estilo editorial/Apple.

> [!NOTE]
> O website será **estático** (HTML/CSS/JS puro) sem necessidade de servidor ou build tools. Basta abrir o `index.html` ou usar um Live Server.
