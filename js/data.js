var CATALOG = {
  categories: [
    { id: 'road', name: 'Estrada', slug: 'road', icon: 'road' },
    { id: 'mtb', name: 'MTB', slug: 'mtb', icon: 'mtb' },
    { id: 'gravel', name: 'Gravel', slug: 'gravel', icon: 'gravel' },
    { id: 'electric', name: 'Elétricas', slug: 'electric', icon: 'electric' },
    { id: 'urban', name: 'Citadinas', slug: 'urban', icon: 'urban' },
    { id: 'outlet', name: 'Outlet', slug: 'outlet', icon: 'outlet' }
  ],

  products: [
    { id: 'aeroad-cf-slx', name: 'Aeroad CF SLX', category: 'road', tagline: 'Aerodinâmica sem limites', price: '6.499€', oldPrice: null, rating: 4.8, specs: { peso: '6.8 kg', quadro: 'Carbono monocoque', grupos: 'Shimano Ultegra Di2', roda: 'DT Swiss ARC 1100' }, image: 'road.jpg', featured: true, badge: 'Novo' },
    { id: 'ultimate-cf-sl', name: 'Ultimate CF SL', category: 'road', tagline: 'Escalada pura', price: '4.299€', oldPrice: '4.799€', rating: 4.7, specs: { peso: '7.2 kg', quadro: 'Carbono CF SL', grupos: 'Shimano 105 Di2', roda: 'DT Swiss P 1800' }, image: 'road.jpg', featured: true },
    { id: 'endurace-cf', name: 'Endurace CF', category: 'road', tagline: 'Conforto em longas distâncias', price: '3.299€', oldPrice: null, rating: 4.6, specs: { peso: '8.1 kg', quadro: 'Carbono CF', grupos: 'Shimano 105', roda: 'Fulcrum Racing 900' }, image: 'road.jpg', featured: false },
    { id: 'spectral-cf', name: 'Spectral CF', category: 'mtb', tagline: 'All-Mountain dominador', price: '4.999€', oldPrice: null, rating: 4.9, specs: { peso: '13.4 kg', quadro: 'Carbono CF', suspensao: 'Fox 36 Float', roda: 'DT Swiss H 1900' }, image: 'mtb.jpg', featured: true, badge: 'Best Seller' },
    { id: 'torque-cf', name: 'Torque CF', category: 'mtb', tagline: 'Enduro extremo', price: '5.499€', oldPrice: '5.999€', rating: 4.8, specs: { peso: '15.2 kg', quadro: 'Carbono CF', suspensao: 'RockShox Zeb', roda: 'DT Swiss H 1700' }, image: 'mtb.jpg', featured: false },
    { id: 'neuron-cf', name: 'Neuron CF', category: 'mtb', tagline: 'Trail eficiente', price: '3.799€', oldPrice: null, rating: 4.5, specs: { peso: '12.8 kg', quadro: 'Carbono CF', suspensao: 'Fox 34 Float', roda: 'DT Swiss H 1900' }, image: 'mtb.jpg', featured: true },
    { id: 'grizl-cf-sl', name: 'Grizl CF SL', category: 'gravel', tagline: 'Aventura sem fronteiras', price: '4.499€', oldPrice: null, rating: 4.7, specs: { peso: '9.2 kg', quadro: 'Carbono CF SL', grupos: 'Shimano GRX 820', roda: 'DT Swiss G 1800' }, image: 'gravel.jpg', featured: true },
    { id: 'grail-cf-sl', name: 'Grail CF SL', category: 'gravel', tagline: 'Gravel racing', price: '5.299€', oldPrice: null, rating: 4.6, specs: { peso: '8.8 kg', quadro: 'Carbono CF SL', grupos: 'SRAM Rival XPLR', roda: 'DT Swiss GRC 1400' }, image: 'gravel.jpg', featured: true, badge: 'Novo' },
    { id: 'precede-on', name: 'Precede:ON', category: 'electric', tagline: 'E-power quotidiano', price: '5.999€', oldPrice: null, rating: 4.4, specs: { peso: '19.5 kg', motor: 'Bosch Performance CX', bateria: '750 Wh', autono: '120 km' }, image: 'road.jpg', featured: false },
    { id: 'commuter-on', name: 'Commuter:ON', category: 'electric', tagline: 'City speed', price: '4.499€', oldPrice: '4.999€', rating: 4.3, specs: { peso: '21.0 kg', motor: 'Bosch Performance Speed', bateria: '500 Wh', autono: '80 km' }, image: 'road.jpg', featured: false },
    { id: 'roadlite', name: 'Roadlite', category: 'urban', tagline: 'Leveza urbana', price: '1.299€', oldPrice: null, rating: 4.5, specs: { peso: '8.0 kg', quadro: 'Alumínio 6061', grupos: 'Shimano Altus', roda: 'Alexrims DP21' }, image: 'road.jpg', featured: false },
    { id: 'commuter-6', name: 'Commuter 6', category: 'urban', tagline: 'City confiável', price: '999€', oldPrice: null, rating: 4.2, specs: { peso: '11.5 kg', quadro: 'Alumínio', grupos: 'Shimano Nexus', roda: 'Rodi rims' }, image: 'road.jpg', featured: false }
  ],

  blog: [
    { id: 'b1', title: 'O futuro do carbono na Canyon', excerpt: 'Conhece o novo processo de fabrico dos nossos quadros monocoque.', author: 'Canyon Engineering', date: '12 Jun 2026', image: 'parallax.jpg', readTime: '5 min' },
    { id: 'b2', title: 'Como escolher a bicicleta gravel ideal', excerpt: 'Guia completo para encontrar a gravel perfeita para o teu estilo.', author: 'Canyon Team', date: '28 Mai 2026', image: 'gravel.jpg', readTime: '8 min' },
    { id: 'b3', title: 'Canyon Factory Racing — Temporada 2026', excerpt: 'Resultados, atletas e novidades da nossa equipa mundial.', author: 'CFR Media', date: '15 Mai 2026', image: 'parallax.jpg', readTime: '6 min' }
  ],

  faq: [
    { q: 'Qual o tempo de entrega?', a: 'As entregas para Portugal continental demoram 3-5 dias úteis. Para ilhas, 5-8 dias úteis.' },
    { q: 'Como funciona a garantia?', a: 'Todas as bicicletas Canyon têm 6 anos de garantia no quadro e 2 anos nos componentes.' },
    { q: 'Posso devolver a bicicleta?', a: 'Sim, tens 30 dias para experimentar. Se não ficar perfeita, devolvemos 100% do valor.' },
    { q: 'Como escolho o tamanho certo?', a: 'Usa o nosso Canyon Size Finder ou consulta a tabela de geometria de cada modelo.' },
    { q: 'Fazem envio para outros países?', a: 'Sim, enviamos para mais de 100 países com suporte técnico local.' }
  ],

  testimonials: [
    { text: 'A melhor bicicleta que já tive. O carbono é impressionante.', author: 'Rui Costa', role: 'Ciclista Profissional' },
    { text: 'O serviço ao cliente Canyon é simplesmente excecional.', author: 'Ana Santos', role: 'Ciclista Amadora' },
    { text: 'Comprei a minha primeira Canyon e já não volto atrás.', author: 'Miguel Oliveira', role: 'Atleta Olímpico' }
  ]
};
