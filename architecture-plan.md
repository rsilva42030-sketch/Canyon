# Canyon E-Commerce Demo — Architecture Plan

## Visão Geral
SPA premium com hash-routing para apresentar à Canyon. Stack vanilla (HTML/CSS/JS) — 0 dependências, 0 servidores.

## Rotas (Hash-based)
| Hash | Página |
|---|---|
| `#/` | Home (Hero + Featured + Brand) |
| `#/shop` | Catálogo completo com filtros |
| `#/product/:id` | Detalhe do produto |
| `#/bike-finder` | Quiz interativo |
| `#/cart` | Carrinho de compras |
| `#/checkout` | Checkout |
| `#/support` | FAQ + Suporte |
| `#/blog` | Editorial Canyon |
| `#/account` | Minha Conta |

## Navegação
```
[CANYON logo]  Modelos ▼  Bike Finder  Suporte  Blog    [🔍]  [👤]  [🛒 (3)]
               ├── Estrada
               ├── MTB
               ├── Gravel
               ├── Elétricas
               ├── Citadinas
               └── Outlet / Peças
```

## Arquitetura de Dados
- `data.js` → JSON com produtos, categorias, depoimentos, blog posts
- `cart.js` → Módulo de carrinho (localStorage, CRUD, total)
- `app.js` → Router, render, navegação, eventos globais

## Secções do Footer (5 colunas)
1. **Modelos** | 2. **Suporte** | 3. **Empresa** | 4. **Legal** | 5. **Social + App**

## Fases de Implementação

### Fase 1 — Shell + Navegação + Home
- SPA router funcional
- Navbar com dropdowns multi-nível
- Home page atualizada com hero + featured products
- Footer completo

### Fase 2 — Catálogo + Produtos
- Página shop com grid de produtos
- Filtros por categoria
- Página de detalhe do produto
- Dados de 15+ produtos reais Canyon

### Fase 3 — Carrinho + Checkout
- Carrinho lateral (slide-in)
- Página de carrinho completa
- Checkout multi-passo (shipping → payment → confirm)

### Fase 4 — Ferramentas
- Bike Finder (quiz 5 perguntas → recomendação)
- Comparador de bicicletas (side-by-side)
- Tabela de tamanhos (size guide)

### Fase 5 — Conteúdo + Suporte
- Blog com 3 artigos
- FAQ accordion
- Chat widget simulado
- Página "Sobre Nós"

### Fase 6 — Conta + Polimento
- Login/Registo (demo)
- Histórico de encomendas
- SEO meta tags dinâmicas
- Micro-animações finas
