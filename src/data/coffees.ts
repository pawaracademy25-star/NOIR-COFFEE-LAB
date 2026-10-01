export interface Coffee {
  id: string;
  name: string;
  subname: string;
  origin: string;
  region: string;
  process: string;
  altitude: string;
  tastingNotes: string[];
  roastProfile: 'Light' | 'Medium-Light' | 'Medium';
  price: number;
  weight: string;
  description: string;
  brewMethod: string;
  bagColor: string;
}

export const COFFEES: Coffee[] = [
  {
    id: 'ethiopia-guji',
    name: 'ETHIOPIA GUJI',
    subname: 'Hambela Estate Batch #04',
    origin: 'Ethiopia',
    region: 'Guji, Oromia',
    process: 'Natural Process',
    altitude: '1,950 – 2,150 MASL',
    tastingNotes: ['Jasmine Floral', 'Bergamot', 'Peach Nectar', 'Wild Honey'],
    roastProfile: 'Light',
    price: 480,
    weight: '250g',
    description: 'Harvested from smallholder heirloom varieties in Hambela. Sun-dried on raised African beds for 21 days, producing an astonishingly bright and sweet cup bursting with jasmine and stone fruit.',
    brewMethod: 'V60 Pour-Over / Aeropress',
    bagColor: '#1A1816',
  },
  {
    id: 'colombia-huila',
    name: 'COLOMBIA HUILA',
    subname: 'El Paraiso Pink Bourbon',
    origin: 'Colombia',
    region: 'San Adolfo, Huila',
    process: 'Anaerobic Fermentation',
    altitude: '1,800 – 1,900 MASL',
    tastingNotes: ['Pink Guava', 'Blood Orange', 'Cacao Nibs', 'Brown Sugar'],
    roastProfile: 'Light',
    price: 520,
    weight: '250g',
    description: 'A rare Pink Bourbon variety subjected to a 48-hour sealed anaerobic environment before washed processing. Intensely aromatic with bright tropical acidity and a velvety finish.',
    brewMethod: 'V60 / Espresso',
    bagColor: '#221E1B',
  },
  {
    id: 'kenya-nyeri',
    name: 'KENYA NYERI',
    subname: 'Karogoto Factory SL28/SL34',
    origin: 'Kenya',
    region: 'Nyeri Hillside',
    process: 'Double Washed',
    altitude: '1,700 – 1,800 MASL',
    tastingNotes: ['Blackcurrant', 'Grapefruit', 'Cane Sugar', 'Tomato Leaf'],
    roastProfile: 'Medium-Light',
    price: 460,
    weight: '250g',
    description: 'Classic Nyeri profile featuring volcanic soil richness. Double-soaked under cool spring water to deliver sparkling phosphoric acidity and complex berry sweetness.',
    brewMethod: 'V60 / Chemex',
    bagColor: '#171513',
  },
  {
    id: 'costarica-tarrazu',
    name: 'COSTA RICA TARRAZÚ',
    subname: 'La Candelilla Honey',
    origin: 'Costa Rica',
    region: 'Tarrazú Valley',
    process: 'Red Honey Process',
    altitude: '1,600 – 1,750 MASL',
    tastingNotes: ['Red Apple', 'Toasted Almond', 'Maple Syrup', 'Milk Chocolate'],
    roastProfile: 'Medium',
    price: 440,
    weight: '250g',
    description: 'Processed with 80% mucilage left intact during sun drying. Offers a rich, coating body with gentle malic acidity and deep caramelized sugar notes.',
    brewMethod: 'Espresso / French Press',
    bagColor: '#25201C',
  },
];
