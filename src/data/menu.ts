export interface MenuItem {
  id: string;
  name: string;
  category: 'ESPRESSO' | 'FILTER' | 'COLD' | 'FOOD' | 'SEASONAL';
  price: number;
  description: string;
  tags?: string[];
  options?: {
    milk?: boolean;
    size?: boolean;
    extraShot?: boolean;
  };
}

export const MENU_ITEMS: MenuItem[] = [
  // Espresso
  {
    id: 'single-origin-espresso',
    name: 'Single Origin Espresso',
    category: 'ESPRESSO',
    price: 160,
    description: 'Double shot extracted at 9.2 bar (18.5g in, 38g out in 28 seconds). Rotating origin.',
    tags: ['Bright', 'Complex'],
    options: { extraShot: true },
  },
  {
    id: 'cortado',
    name: 'Cortado',
    category: 'ESPRESSO',
    price: 200,
    description: 'Equal parts single-origin espresso and silky steamed milk (4oz total).',
    tags: ['Balanced', 'Tactile'],
    options: { milk: true, extraShot: true },
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    category: 'ESPRESSO',
    price: 220,
    description: 'Double shot ristretto with micro-foamed milk poured with a thin layer of velvet microfoam (6oz).',
    tags: ['Creamy', 'Rich'],
    options: { milk: true, extraShot: true },
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'ESPRESSO',
    price: 210,
    description: 'Classic 6oz ratio with structured dense microfoam and dusted single-origin cacao.',
    tags: ['Classic', 'Comfort'],
    options: { milk: true, extraShot: true },
  },
  {
    id: 'noir-americano',
    name: 'NOIR Americano',
    category: 'ESPRESSO',
    price: 180,
    description: 'Espresso double shot served over 80°C filtered mountain spring water.',
    tags: ['Clean', 'Aromatic'],
    options: { size: true, extraShot: true },
  },

  // Filter
  {
    id: 'v60-pourover',
    name: 'Hario V60 Hand Pour',
    category: 'FILTER',
    price: 280,
    description: 'Precision hand-brewed filter using Hario 02 glass cone. 15g coffee to 250g water at 93°C.',
    tags: ['Floral', 'Tea-like'],
  },
  {
    id: 'aeropress-press',
    name: 'Aeropress Precision',
    category: 'FILTER',
    price: 260,
    description: 'Inverted method extraction. Full immersion body with sparkling clarity.',
    tags: ['Textured', 'Sweet'],
  },
  {
    id: 'chemex-carafe',
    name: 'Chemex 2-Cup Carafe',
    category: 'FILTER',
    price: 320,
    description: 'Thick bond paper filtration delivering an ultra-clean, transparent cup profile.',
    tags: ['Crystal Clear', 'Elegant'],
  },

  // Cold
  {
    id: 'kyoto-cold-drip',
    name: '24-Hour Kyoto Slow Drip',
    category: 'COLD',
    price: 260,
    description: 'Single drip per second extraction over ice sphere. Low acidity, high chocolate richness.',
    tags: ['Silky', 'Intense'],
  },
  {
    id: 'nitro-draft',
    name: 'Nitro Cold Brew',
    category: 'COLD',
    price: 270,
    description: 'Cold brew infused with pure nitrogen on tap. Stout-like cascading head and velvety mouthfeel.',
    tags: ['Creamy', 'No Dairy Needed'],
  },
  {
    id: 'espresso-tonic',
    name: 'NOIR Tonic',
    category: 'COLD',
    price: 290,
    description: 'Double espresso poured over artisanal Indian tonic water, fresh grapefruit zest, and clear ice.',
    tags: ['Effervescent', 'Refreshing'],
  },

  // Seasonal
  {
    id: 'smoked-cardamom-latte',
    name: 'Smoked Cardamom Latte',
    category: 'SEASONAL',
    price: 290,
    description: 'Espresso, oat milk infused with house-smoked black cardamom pods and unrefined palm sugar.',
    tags: ['Warm', 'Spiced'],
    options: { milk: true },
  },
  {
    id: 'cascara-fizz',
    name: 'Cascara & Yuzu Fizz',
    category: 'SEASONAL',
    price: 260,
    description: 'Sparkling tea infusion made from dried coffee cherry husks, raw yuzu juice, and sparkling water.',
    tags: ['Tart', 'Botanical'],
  },

  // Food
  {
    id: 'sourdough-avocado',
    name: 'Sourdough Toast & Cultured Butter',
    category: 'FOOD',
    price: 240,
    description: '24-hour natural sourdough toasted with cultured sea salt butter and toasted buckwheat.',
    tags: ['Artisanal', 'Savory'],
  },
  {
    id: 'almond-croissant',
    name: 'Twice-Baked Almond Croissant',
    category: 'FOOD',
    price: 220,
    description: 'Flaky butter croissant filled with vanilla frangipane cream and topped with toasted flaked almonds.',
    tags: ['Freshly Baked', 'Decadent'],
  },
];
