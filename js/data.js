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
    { id: 'aeroad-cf-slx', name: 'Aeroad CF SLX', category: 'road', tagline: 'Aerodinâmica sem limites', price: '6.499€', oldPrice: null, rating: 4.8, specs: { peso: '6.8 kg', quadro: 'Carbono monocoque', grupos: 'Shimano Ultegra Di2', roda: 'DT Swiss ARC 1100', travões: 'Shimano Ultegra hidráulicos' }, image: 'road.jpg', featured: true, badge: 'Best Seller', sizes: [
      { size: 'XS', height: '1.65-1.72m', reach: 375, stack: 527, tTube: 525 },
      { size: 'S', height: '1.71-1.78m', reach: 382, stack: 537, tTube: 540 },
      { size: 'M', height: '1.77-1.84m', reach: 389, stack: 557, tTube: 560 },
      { size: 'L', height: '1.83-1.90m', reach: 396, stack: 572, tTube: 580 },
      { size: 'XL', height: '1.89-1.96m', reach: 403, stack: 592, tTube: 600 }
    ] },
    { id: 'ultimate-cf-sl', name: 'Ultimate CF SL', category: 'road', tagline: 'Escalada pura', price: '4.299€', oldPrice: '4.799€', rating: 4.7, specs: { peso: '7.2 kg', quadro: 'Carbono CF SL', grupos: 'Shimano 105 Di2', roda: 'DT Swiss P 1800', travões: 'Shimano 105 hidráulicos' }, image: 'road.jpg', featured: true, sizes: [
      { size: 'XS', height: '1.62-1.70m', reach: 370, stack: 520, tTube: 510 },
      { size: 'S', height: '1.70-1.78m', reach: 377, stack: 535, tTube: 530 },
      { size: 'M', height: '1.76-1.84m', reach: 384, stack: 550, tTube: 550 },
      { size: 'L', height: '1.82-1.90m', reach: 391, stack: 565, tTube: 570 },
      { size: 'XL', height: '1.88-1.96m', reach: 398, stack: 580, tTube: 590 }
    ] },
    { id: 'endurace-cf', name: 'Endurace CF', category: 'road', tagline: 'Conforto em longas distâncias', price: '3.299€', oldPrice: null, rating: 4.6, specs: { peso: '8.1 kg', quadro: 'Carbono CF', grupos: 'Shimano 105', roda: 'Fulcrum Racing 900', travões: 'Shimano 105 hidráulicos' }, image: 'road.jpg', featured: false, sizes: [
      { size: 'S', height: '1.66-1.74m', reach: 365, stack: 540, tTube: 520 },
      { size: 'M', height: '1.72-1.80m', reach: 372, stack: 555, tTube: 540 },
      { size: 'L', height: '1.80-1.88m', reach: 379, stack: 570, tTube: 560 },
      { size: 'XL', height: '1.86-1.94m', reach: 386, stack: 585, tTube: 580 }
    ] },
    { id: 'aeroad-cfr', name: 'Aeroad CFR', category: 'road', tagline: 'O expoente máximo da aerodinâmica', price: '9.999€', oldPrice: null, rating: 4.9, specs: { peso: '6.4 kg', quadro: 'Carbono CFR monocoque', grupos: 'SRAM Red AXS', roda: 'Zipp 454 NSW', travões: 'SRAM Red hidráulicos' }, image: 'road.jpg', featured: true, badge: 'Novo', sizes: [
      { size: 'XS', height: '1.65-1.72m', reach: 373, stack: 525, tTube: 520 },
      { size: 'S', height: '1.71-1.78m', reach: 380, stack: 535, tTube: 535 },
      { size: 'M', height: '1.77-1.84m', reach: 387, stack: 555, tTube: 555 },
      { size: 'L', height: '1.83-1.90m', reach: 394, stack: 570, tTube: 575 },
      { size: 'XL', height: '1.89-1.96m', reach: 401, stack: 590, tTube: 595 }
    ] },
    { id: 'ultimate-cfr-evo', name: 'Ultimate CFR EVO', category: 'road', tagline: 'A mais leve do mundo', price: '11.999€', oldPrice: null, rating: 4.9, specs: { peso: '5.9 kg', quadro: 'Carbono CFR EVO', grupos: 'Shimano Dura-Ace Di2', roda: 'Lightweight Meilenstein', travões: 'Shimano Dura-Ace hidráulicos' }, image: 'road.jpg', featured: true, sizes: [
      { size: 'XS', height: '1.63-1.71m', reach: 368, stack: 518, tTube: 505 },
      { size: 'S', height: '1.70-1.78m', reach: 375, stack: 533, tTube: 525 },
      { size: 'M', height: '1.76-1.84m', reach: 382, stack: 548, tTube: 545 },
      { size: 'L', height: '1.82-1.90m', reach: 389, stack: 563, tTube: 565 }
    ] },
    { id: 'endurace-cfr', name: 'Endurace CFR', category: 'road', tagline: 'Conforto sem compromisso', price: '5.999€', oldPrice: null, rating: 4.8, specs: { peso: '7.6 kg', quadro: 'Carbono CFR', grupos: 'Shimano Ultegra Di2', roda: 'DT Swiss ERC 1400', travões: 'Shimano Ultegra hidráulicos' }, image: 'road.jpg', featured: false, sizes: [
      { size: 'XS', height: '1.60-1.68m', reach: 362, stack: 535, tTube: 510 },
      { size: 'S', height: '1.66-1.74m', reach: 369, stack: 550, tTube: 530 },
      { size: 'M', height: '1.72-1.80m', reach: 376, stack: 565, tTube: 550 },
      { size: 'L', height: '1.80-1.88m', reach: 383, stack: 580, tTube: 570 },
      { size: 'XL', height: '1.86-1.94m', reach: 390, stack: 595, tTube: 590 }
    ] },
    { id: 'spectral-cf', name: 'Spectral CF', category: 'mtb', tagline: 'All-Mountain dominador', price: '4.999€', oldPrice: null, rating: 4.9, specs: { peso: '13.4 kg', quadro: 'Carbono CF', suspensao: 'Fox 36 Float', roda: 'DT Swiss H 1900', travões: 'Shimano XT M8120' }, image: 'mtb.jpg', featured: true, badge: 'Best Seller', sizes: [
      { size: 'S', height: '1.60-1.70m', reach: 430, stack: 605, tTube: 390 },
      { size: 'M', height: '1.68-1.78m', reach: 450, stack: 615, tTube: 420 },
      { size: 'L', height: '1.76-1.86m', reach: 470, stack: 625, tTube: 450 },
      { size: 'XL', height: '1.84-1.96m', reach: 490, stack: 635, tTube: 480 }
    ] },
    { id: 'torque-cf', name: 'Torque CF', category: 'mtb', tagline: 'Enduro extremo', price: '5.499€', oldPrice: '5.999€', rating: 4.8, specs: { peso: '15.2 kg', quadro: 'Carbono CF', suspensao: 'RockShox Zeb', roda: 'DT Swiss H 1700', travões: 'SRAM Code RSC' }, image: 'mtb.jpg', featured: true, sizes: [
      { size: 'M', height: '1.65-1.76m', reach: 445, stack: 610, tTube: 400 },
      { size: 'L', height: '1.75-1.86m', reach: 465, stack: 620, tTube: 430 },
      { size: 'XL', height: '1.84-1.96m', reach: 485, stack: 630, tTube: 460 }
    ] },
    { id: 'neuron-cf', name: 'Neuron CF', category: 'mtb', tagline: 'Trail eficiente', price: '3.799€', oldPrice: null, rating: 4.5, specs: { peso: '12.8 kg', quadro: 'Carbono CF', suspensao: 'Fox 34 Float', roda: 'DT Swiss H 1900', travões: 'Shimano Deore M6100' }, image: 'mtb.jpg', featured: true, sizes: [
      { size: 'S', height: '1.55-1.67m', reach: 420, stack: 595, tTube: 380 },
      { size: 'M', height: '1.65-1.77m', reach: 440, stack: 605, tTube: 410 },
      { size: 'L', height: '1.75-1.87m', reach: 460, stack: 615, tTube: 440 },
      { size: 'XL', height: '1.85-1.97m', reach: 480, stack: 625, tTube: 470 }
    ] },
    { id: 'spectral-125-cf', name: 'Spectral 125 CF', category: 'mtb', tagline: 'Downcountry ágil', price: '4.499€', oldPrice: null, rating: 4.7, specs: { peso: '12.6 kg', quadro: 'Carbono CF', suspensao: 'Fox 36 Performance', roda: 'DT Swiss H 1900', travões: 'Shimano SLX M7120' }, image: 'mtb.jpg', featured: false, badge: 'Novo', sizes: [
      { size: 'S', height: '1.58-1.68m', reach: 425, stack: 600, tTube: 385 },
      { size: 'M', height: '1.66-1.76m', reach: 445, stack: 610, tTube: 415 },
      { size: 'L', height: '1.74-1.86m', reach: 465, stack: 620, tTube: 445 },
      { size: 'XL', height: '1.84-1.96m', reach: 485, stack: 630, tTube: 475 }
    ] },
    { id: 'strive-on-cfr', name: 'Strive:ON CFR', category: 'mtb', tagline: 'E-Enduro de competição', price: '7.999€', oldPrice: null, rating: 4.6, specs: { peso: '21.5 kg', motor: 'Bosch Performance CX', bateria: '750 Wh', suspensao: 'Fox 38 Factory', roda: 'DT Swiss HX 1700', travões: 'SRAM Code RSC' }, image: 'mtb.jpg', featured: true, badge: 'Novo', sizes: [
      { size: 'S', height: '1.60-1.70m', reach: 440, stack: 615, tTube: 395 },
      { size: 'M', height: '1.68-1.78m', reach: 460, stack: 625, tTube: 425 },
      { size: 'L', height: '1.76-1.86m', reach: 480, stack: 635, tTube: 455 },
      { size: 'XL', height: '1.84-1.96m', reach: 500, stack: 645, tTube: 485 }
    ] },
    { id: 'torque-on', name: 'Torque:ON', category: 'mtb', tagline: 'E-Enduro sem limites', price: '6.499€', oldPrice: null, rating: 4.5, specs: { peso: '23.0 kg', motor: 'Bosch Performance CX', bateria: '625 Wh', suspensao: 'RockShox Zeb', roda: 'DT Swiss HX 1700', travões: 'SRAM Code RSC' }, image: 'mtb.jpg', featured: false, sizes: [
      { size: 'M', height: '1.63-1.74m', reach: 450, stack: 620, tTube: 410 },
      { size: 'L', height: '1.72-1.84m', reach: 470, stack: 630, tTube: 440 },
      { size: 'XL', height: '1.82-1.94m', reach: 490, stack: 640, tTube: 470 }
    ] },
    { id: 'grizl-cf-sl', name: 'Grizl CF SL', category: 'gravel', tagline: 'Aventura sem fronteiras', price: '4.499€', oldPrice: null, rating: 4.7, specs: { peso: '9.2 kg', quadro: 'Carbono CF SL', grupos: 'Shimano GRX 820', roda: 'DT Swiss G 1800', travões: 'Shimano GRX hidráulicos' }, image: 'gravel.jpg', featured: true, sizes: [
      { size: 'XS', height: '1.60-1.67m', reach: 370, stack: 540, tTube: 510 },
      { size: 'S', height: '1.66-1.74m', reach: 377, stack: 555, tTube: 530 },
      { size: 'M', height: '1.72-1.80m', reach: 384, stack: 570, tTube: 550 },
      { size: 'L', height: '1.80-1.88m', reach: 391, stack: 585, tTube: 570 },
      { size: 'XL', height: '1.86-1.95m', reach: 398, stack: 600, tTube: 590 }
    ] },
    { id: 'grail-cf-sl', name: 'Grail CF SL', category: 'gravel', tagline: 'Gravel racing', price: '5.299€', oldPrice: null, rating: 4.6, specs: { peso: '8.8 kg', quadro: 'Carbono CF SL', grupos: 'SRAM Rival XPLR', roda: 'DT Swiss GRC 1400', travões: 'SRAM Rival hidráulicos' }, image: 'gravel.jpg', featured: true, badge: 'Best Seller', sizes: [
      { size: 'S', height: '1.64-1.72m', reach: 375, stack: 545, tTube: 520 },
      { size: 'M', height: '1.70-1.78m', reach: 382, stack: 560, tTube: 540 },
      { size: 'L', height: '1.78-1.86m', reach: 389, stack: 575, tTube: 560 },
      { size: 'XL', height: '1.84-1.93m', reach: 396, stack: 590, tTube: 580 }
    ] },
    { id: 'grizl-on', name: 'Grizl:ON', category: 'gravel', tagline: 'E-gravel para tudo', price: '5.499€', oldPrice: null, rating: 4.5, specs: { peso: '16.8 kg', motor: 'Bosch Performance CX', bateria: '500 Wh', grupos: 'Shimano GRX 820', roda: 'DT Swiss HG 1800', travões: 'Shimano GRX hidráulicos' }, image: 'gravel.jpg', featured: false, badge: 'Novo', sizes: [
      { size: 'S', height: '1.62-1.72m', reach: 380, stack: 550, tTube: 525 },
      { size: 'M', height: '1.70-1.80m', reach: 387, stack: 565, tTube: 545 },
      { size: 'L', height: '1.78-1.88m', reach: 394, stack: 580, tTube: 565 },
      { size: 'XL', height: '1.86-1.95m', reach: 401, stack: 595, tTube: 585 }
    ] },
    { id: 'grail-cfr', name: 'Grail CFR', category: 'gravel', tagline: 'O topo do gravel mundial', price: '7.999€', oldPrice: null, rating: 4.8, specs: { peso: '8.2 kg', quadro: 'Carbono CFR', grupos: 'SRAM Red XPLR', roda: 'DT Swiss GRC 1100', travões: 'SRAM Red hidráulicos' }, image: 'gravel.jpg', featured: true, sizes: [
      { size: 'S', height: '1.64-1.72m', reach: 373, stack: 543, tTube: 515 },
      { size: 'M', height: '1.70-1.78m', reach: 380, stack: 558, tTube: 535 },
      { size: 'L', height: '1.78-1.86m', reach: 387, stack: 573, tTube: 555 },
      { size: 'XL', height: '1.84-1.93m', reach: 394, stack: 588, tTube: 575 }
    ] },
    { id: 'grizl-cf-sl-7', name: 'Grizl CF SL 7', category: 'gravel', tagline: 'Aventura acessível', price: '2.799€', oldPrice: null, rating: 4.4, specs: { peso: '9.9 kg', quadro: 'Carbono CF SL', grupos: 'Shimano GRX 610', roda: 'DT Swiss G 1800', travões: 'Shimano GRX hidráulicos' }, image: 'gravel.jpg', featured: false, sizes: [
      { size: 'XS', height: '1.58-1.65m', reach: 365, stack: 535, tTube: 500 },
      { size: 'S', height: '1.64-1.72m', reach: 372, stack: 550, tTube: 520 },
      { size: 'M', height: '1.70-1.78m', reach: 379, stack: 565, tTube: 540 },
      { size: 'L', height: '1.78-1.86m', reach: 386, stack: 580, tTube: 560 },
      { size: 'XL', height: '1.84-1.93m', reach: 393, stack: 595, tTube: 580 }
    ] },
    { id: 'precede-on', name: 'Precede:ON', category: 'electric', tagline: 'E-power quotidiano', price: '5.999€', oldPrice: null, rating: 4.4, specs: { peso: '19.5 kg', motor: 'Bosch Performance CX', bateria: '750 Wh', autono: '120 km', travões: 'Magura MT5' }, image: 'electric.jpg', featured: true, sizes: [
      { size: 'S', height: '1.62-1.72m', reach: 390, stack: 560, tTube: 530 },
      { size: 'M', height: '1.70-1.80m', reach: 400, stack: 575, tTube: 550 },
      { size: 'L', height: '1.78-1.88m', reach: 410, stack: 590, tTube: 570 }
    ] },
    { id: 'commuter-on', name: 'Commuter:ON', category: 'electric', tagline: 'City speed', price: '4.499€', oldPrice: '4.999€', rating: 4.3, specs: { peso: '21.0 kg', motor: 'Bosch Performance Speed', bateria: '500 Wh', autono: '80 km', travões: 'Magura MT4' }, image: 'electric.jpg', featured: false, sizes: [
      { size: 'S', height: '1.60-1.70m', reach: 380, stack: 550, tTube: 520 },
      { size: 'M', height: '1.68-1.78m', reach: 390, stack: 565, tTube: 540 },
      { size: 'L', height: '1.76-1.86m', reach: 400, stack: 580, tTube: 560 }
    ] },
    { id: 'precede-on-cfr', name: 'Precede:ON CFR', category: 'electric', tagline: 'E-premium máximo', price: '8.999€', oldPrice: null, rating: 4.6, specs: { peso: '18.2 kg', motor: 'Bosch Performance CX', bateria: '750 Wh', autono: '130 km', grupos: 'Shimano XT', travões: 'Magura MT7' }, image: 'electric.jpg', featured: true, badge: 'Novo', sizes: [
      { size: 'S', height: '1.62-1.72m', reach: 388, stack: 558, tTube: 525 },
      { size: 'M', height: '1.70-1.80m', reach: 398, stack: 573, tTube: 545 },
      { size: 'L', height: '1.78-1.88m', reach: 408, stack: 588, tTube: 565 }
    ] },
    { id: 'pathlite-on', name: 'Pathlite:ON', category: 'electric', tagline: 'E-trekking versátil', price: '3.799€', oldPrice: null, rating: 4.3, specs: { peso: '22.0 kg', motor: 'Bosch Performance CX', bateria: '500 Wh', autono: '90 km', travões: 'Shimano MT420' }, image: 'electric.jpg', featured: false, sizes: [
      { size: 'S', height: '1.55-1.67m', reach: 370, stack: 555, tTube: 510 },
      { size: 'M', height: '1.65-1.77m', reach: 380, stack: 570, tTube: 530 },
      { size: 'L', height: '1.75-1.87m', reach: 390, stack: 585, tTube: 550 },
      { size: 'XL', height: '1.85-1.97m', reach: 400, stack: 600, tTube: 570 }
    ] },
    { id: 'ucf-7', name: 'UCF 7', category: 'electric', tagline: 'City elétrica passo-a-passo', price: '2.499€', oldPrice: null, rating: 4.1, specs: { peso: '23.5 kg', motor: 'Bosch Active Line Plus', bateria: '400 Wh', autono: '65 km', travões: 'Shimano MT200' }, image: 'electric.jpg', featured: false, sizes: [
      { size: 'S', height: '1.55-1.65m', reach: 360, stack: 540, tTube: 490 },
      { size: 'M', height: '1.63-1.73m', reach: 370, stack: 555, tTube: 510 },
      { size: 'L', height: '1.71-1.81m', reach: 380, stack: 570, tTube: 530 }
    ] },
    { id: 'roadlite', name: 'Roadlite', category: 'urban', tagline: 'Leveza urbana', price: '1.299€', oldPrice: null, rating: 4.5, specs: { peso: '8.0 kg', quadro: 'Alumínio 6061', grupos: 'Shimano Altus', roda: 'Alexrims DP21', travões: 'Shimano MT200' }, image: 'urban.jpg', featured: true, sizes: [
      { size: 'S', height: '1.60-1.70m', reach: 375, stack: 530, tTube: 520 },
      { size: 'M', height: '1.68-1.78m', reach: 385, stack: 545, tTube: 540 },
      { size: 'L', height: '1.76-1.86m', reach: 395, stack: 560, tTube: 560 },
      { size: 'XL', height: '1.84-1.94m', reach: 405, stack: 575, tTube: 580 }
    ] },
    { id: 'commuter-6', name: 'Commuter 6', category: 'urban', tagline: 'City confiável', price: '999€', oldPrice: null, rating: 4.2, specs: { peso: '11.5 kg', quadro: 'Alumínio', grupos: 'Shimano Nexus', roda: 'Rodi rims', travões: 'Shimano MT200' }, image: 'urban.jpg', featured: false, sizes: [
      { size: 'S', height: '1.55-1.65m', reach: 365, stack: 525, tTube: 500 },
      { size: 'M', height: '1.63-1.73m', reach: 375, stack: 540, tTube: 520 },
      { size: 'L', height: '1.71-1.81m', reach: 385, stack: 555, tTube: 540 }
    ] },
    { id: 'roadlite-cf', name: 'Roadlite CF', category: 'urban', tagline: 'Carbono urbano', price: '1.899€', oldPrice: null, rating: 4.6, specs: { peso: '7.2 kg', quadro: 'Carbono CF', grupos: 'Shimano 105', roda: 'DT Swiss E 1800', travões: 'Shimano 105 hidráulicos' }, image: 'urban.jpg', featured: true, badge: 'Novo', sizes: [
      { size: 'S', height: '1.60-1.70m', reach: 373, stack: 528, tTube: 515 },
      { size: 'M', height: '1.68-1.78m', reach: 383, stack: 543, tTube: 535 },
      { size: 'L', height: '1.76-1.86m', reach: 393, stack: 558, tTube: 555 },
      { size: 'XL', height: '1.84-1.94m', reach: 403, stack: 573, tTube: 575 }
    ] },
    { id: 'commuter-5', name: 'Commuter 5', category: 'urban', tagline: 'Mobilidade simples', price: '799€', oldPrice: null, rating: 4.0, specs: { peso: '12.5 kg', quadro: 'Alumínio', grupos: 'Shimano Tourney', roda: 'Rodi rims', travões: 'Shimano MT200' }, image: 'urban.jpg', featured: false, sizes: [
      { size: 'S', height: '1.55-1.65m', reach: 360, stack: 520, tTube: 495 },
      { size: 'M', height: '1.63-1.73m', reach: 370, stack: 535, tTube: 515 },
      { size: 'L', height: '1.71-1.81m', reach: 380, stack: 550, tTube: 535 }
    ] },
    { id: 'precede-cf', name: 'Precede CF', category: 'urban', tagline: 'Flat bar performance', price: '1.599€', oldPrice: null, rating: 4.3, specs: { peso: '9.0 kg', quadro: 'Carbono CF', grupos: 'Shimano GRX', roda: 'DT Swiss E 1800', travões: 'Shimano GRX hidráulicos' }, image: 'urban.jpg', featured: false, sizes: [
      { size: 'S', height: '1.60-1.70m', reach: 380, stack: 545, tTube: 520 },
      { size: 'M', height: '1.68-1.78m', reach: 390, stack: 560, tTube: 540 },
      { size: 'L', height: '1.76-1.86m', reach: 400, stack: 575, tTube: 560 }
    ] },
    { id: 'aeroad-cf-slx-outlet', name: 'Aeroad CF SLX (Série Anterior)', category: 'outlet', tagline: 'Performance ao melhor preço', price: '4.999€', oldPrice: '6.499€', rating: 4.7, specs: { peso: '6.9 kg', quadro: 'Carbono monocoque', grupos: 'Shimano Ultegra Di2', roda: 'DT Swiss ARC 1100', travões: 'Shimano Ultegra hidráulicos' }, image: 'outlet.jpg', featured: true, badge: '-23%', sizes: [
      { size: 'S', height: '1.71-1.78m', reach: 382, stack: 537, tTube: 540 },
      { size: 'M', height: '1.77-1.84m', reach: 389, stack: 557, tTube: 560 },
      { size: 'L', height: '1.83-1.90m', reach: 396, stack: 572, tTube: 580 }
    ] },
    { id: 'spectral-cf-outlet', name: 'Spectral CF (Série Anterior)', category: 'outlet', tagline: 'All-Mountain em promoção', price: '3.999€', oldPrice: '4.999€', rating: 4.8, specs: { peso: '13.6 kg', quadro: 'Carbono CF', suspensao: 'Fox 36 Float', roda: 'DT Swiss H 1900', travões: 'Shimano XT M8120' }, image: 'outlet.jpg', featured: true, badge: '-20%', sizes: [
      { size: 'M', height: '1.68-1.78m', reach: 450, stack: 615, tTube: 420 },
      { size: 'L', height: '1.76-1.86m', reach: 470, stack: 625, tTube: 450 },
      { size: 'XL', height: '1.84-1.96m', reach: 490, stack: 635, tTube: 480 }
    ] },
    { id: 'endurace-cf-outlet', name: 'Endurace CF (Série Anterior)', category: 'outlet', tagline: 'Conforto com desconto', price: '2.499€', oldPrice: '3.299€', rating: 4.5, specs: { peso: '8.3 kg', quadro: 'Carbono CF', grupos: 'Shimano 105', roda: 'Fulcrum Racing 900', travões: 'Shimano 105 hidráulicos' }, image: 'outlet.jpg', featured: false, badge: '-24%', sizes: [
      { size: 'S', height: '1.66-1.74m', reach: 365, stack: 540, tTube: 520 },
      { size: 'M', height: '1.72-1.80m', reach: 372, stack: 555, tTube: 540 },
      { size: 'L', height: '1.80-1.88m', reach: 379, stack: 570, tTube: 560 }
    ] },
    { id: 'grail-cf-sl-outlet', name: 'Grail CF SL (Série Anterior)', category: 'outlet', tagline: 'Gravel racing com desconto', price: '3.999€', oldPrice: '5.299€', rating: 4.6, specs: { peso: '9.0 kg', quadro: 'Carbono CF SL', grupos: 'SRAM Rival XPLR', roda: 'DT Swiss GRC 1400', travões: 'SRAM Rival hidráulicos' }, image: 'outlet.jpg', featured: true, badge: '-25%', sizes: [
      { size: 'S', height: '1.64-1.72m', reach: 375, stack: 545, tTube: 520 },
      { size: 'M', height: '1.70-1.78m', reach: 382, stack: 560, tTube: 540 },
      { size: 'L', height: '1.78-1.86m', reach: 389, stack: 575, tTube: 560 },
      { size: 'XL', height: '1.84-1.93m', reach: 396, stack: 590, tTube: 580 }
    ] },
    { id: 'neuron-cf-outlet', name: 'Neuron CF (Série Anterior)', category: 'outlet', tagline: 'Trail leve ao melhor preço', price: '2.999€', oldPrice: '3.799€', rating: 4.4, specs: { peso: '13.0 kg', quadro: 'Carbono CF', suspensao: 'Fox 34 Float', roda: 'DT Swiss H 1900', travões: 'Shimano Deore M6100' }, image: 'outlet.jpg', featured: false, badge: '-21%', sizes: [
      { size: 'S', height: '1.55-1.67m', reach: 420, stack: 595, tTube: 380 },
      { size: 'M', height: '1.65-1.77m', reach: 440, stack: 605, tTube: 410 },
      { size: 'L', height: '1.75-1.87m', reach: 460, stack: 615, tTube: 440 }
    ] }
  ],

  blog: [
    { id: 'b1', title: 'O futuro do carbono na Canyon', excerpt: 'Conhece o novo processo de fabrico dos nossos quadros monocoque.', author: 'Canyon Engineering', date: '12 Jun 2026', image: 'parallax.jpg', readTime: '5 min' },
    { id: 'b2', title: 'Como escolher a bicicleta gravel ideal', excerpt: 'Guia completo para encontrar a gravel perfeita para o teu estilo.', author: 'Canyon Team', date: '28 Mai 2026', image: 'gravel.jpg', readTime: '8 min' },
    { id: 'b3', title: 'Canyon Factory Racing — Temporada 2026', excerpt: 'Resultados, atletas e novidades da nossa equipa mundial.', author: 'CFR Media', date: '15 Mai 2026', image: 'parallax.jpg', readTime: '6 min' },
    { id: 'b4', title: 'Guia definitivo para escolher a tua primeira MTB', excerpt: 'Tudo o que precisas de saber sobre suspensões, geometria e materiais.', author: 'Canyon Tech', date: '10 Jun 2026', image: 'mtb.jpg', readTime: '10 min' },
    { id: 'b5', title: 'Electrificação: como a Canyon está a revolucionar a mobilidade', excerpt: 'A nova gama de elétricas e o futuro da mobilidade urbana.', author: 'Canyon Lab', date: '01 Jun 2026', image: 'electric.jpg', readTime: '7 min' }
  ],

  faq: [
    { q: 'Qual o tempo de entrega?', a: 'As entregas para Portugal continental demoram 3-5 dias úteis. Para ilhas, 5-8 dias úteis.' },
    { q: 'Como funciona a garantia?', a: 'Todas as bicicletas Canyon têm 6 anos de garantia no quadro e 2 anos nos componentes.' },
    { q: 'Posso devolver a bicicleta?', a: 'Sim, tens 30 dias para experimentar. Se não ficar perfeita, devolvemos 100% do valor.' },
    { q: 'Como escolho o tamanho certo?', a: 'Usa o nosso Canyon Size Finder ou consulta a tabela de geometria de cada modelo.' },
    { q: 'Fazem envio para outros países?', a: 'Sim, enviamos para mais de 100 países com suporte técnico local.' },
    { q: 'As bicicletas vêm montadas?', a: 'Sim, cada bicicleta sai da nossa fábrica totalmente montada e afinada. Só precisas de montar o guiador e pedais.' },
    { q: 'Qual a diferença entre CFR, CF SLX e CF SL?', a: 'CFR é o nosso topo de gama em carbono (mais leve e rígido), CF SLX é performance intermédia, e CF SL é a relação qualidade-preço ideal.' }
  ],

  testimonials: [
    { text: 'A melhor bicicleta que já tive. O carbono é impressionante.', author: 'Rui Costa', role: 'Ciclista Profissional' },
    { text: 'O serviço ao cliente Canyon é simplesmente excecional.', author: 'Ana Santos', role: 'Ciclista Amadora' },
    { text: 'Comprei a minha primeira Canyon e já não volto atrás.', author: 'Miguel Oliveira', role: 'Atleta Olímpico' }
  ]
};
