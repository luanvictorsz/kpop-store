export const products = [
  {
    id: 1,
    name: "Concha da Sorte - Básica",
    category: "concha",
    price: 5,
    type: "basic",
    description: "Uma tentativa para testar a sorte. Perfeito para a primeira vez!",
    image: "/images/ref.jpg",  
    imageAlt: "Concha da Sorte Básica",
    badge: "Básico",
    rarity: "comum"
  },
  {
    id: 2,
    name: "Concha da Sorte - Standard",
    category: "concha",
    price: 10,
    type: "standard",
    description: "Mais chances de prêmios melhores. O favorito das fãs!",
    image: "/images/ref.jpg",  
    imageAlt: "Concha da Sorte Standard",
    badge: "Popular",
    rarity: "medio",
    popular: true
  },
  {
    id: 3,
    name: "Concha da Sorte - Premium",
    category: "concha",
    price: 20,
    type: "premium",
    description: "Experiência premium com prioridade nos prêmios raros e brinde extra!",
    image: "/images/ref.jpg",  
    imageAlt: "Concha da Sorte Premium",
    badge: "Premium",
    rarity: "raro"
  },
  {
    id: 4,
    name: "Photocard Individual",
    category: "produto",
    price: 8,
    type: "photocard",
    description: "Photocard exclusivo dos integrantes do BTS. Modelo aleatório.",
    image: "/images/ref.jpg",  
    imageAlt: "Photocard BTS",
    badge: "Novo",
    inStock: true
  },
  {
    id: 5,
    name: "Kit de Photocards (3 un)",
    category: "produto",
    price: 20,
    type: "kit",
    description: "3 photocards colecionáveis em embalagem especial.",
    image: "/images/ref.jpg",  
    imageAlt: "Kit de Photocards",
    badge: "Promoção",
    inStock: true
  },
  {
    id: 6,
    name: "Pôster Oficial",
    category: "produto",
    price: 15,
    type: "poster",
    description: "Pôster tamanho A2 de alta qualidade. Design exclusivo.",
    image: "/images/ref.jpg",  
    imageAlt: "Pôster BTS",
    badge: "Limitado",
    inStock: true
  },
  {
    id: 7,
    name: "Kit Completo BTS",
    category: "produto",
    price: 45,
    type: "complete",
    description: "Kit completo: 5 photocards + pôster + adesivos + cartinha",
    image: "/images/ref.jpg",  
    imageAlt: "Kit Completo BTS",
    badge: "Especial",
    inStock: true
  },
  {
    id: 8,
    name: "Adesivos Temáticos (pacote)",
    category: "produto",
    price: 6,
    type: "stickers",
    description: "Pacote com 10 adesivos exclusivos do BTS",
    image: "/images/ref.jpg",  
    imageAlt: "Adesivos BTS",
    badge: "Novo",
    inStock: true
  }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);