export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
}

export const JOURNAL_ARTICLES: Article[] = [
  {
    id: 'natural-process',
    title: 'Why natural-process coffee tastes different',
    category: 'Fermentation & Origin',
    date: 'OCTOBER 2026',
    readTime: '4 MIN READ',
    summary: 'Exploring the fermentation methods that produce fruit-forward, winey cup profiles.',
    content: [
      'In a washed coffee, the mucilage is removed immediately after pulping. But with natural processing, the entire coffee cherry is laid out on raised drying beds to sun-dry intact for 15 to 30 days.',
      'During this extended period, micro-fermentation takes place inside the cherry skin. Natural yeasts and bacteria consume the sugars in the fruit pulp, transferring aromatic compounds directly into the seed.',
      'This yields distinct notes of wild blueberry, dried fig, jasmine floral aromas, and a syrupy, wine-like body. At NOIR, we roast our natural coffees lightly to preserve these delicate organic acid structures without imparting roasted bitterness.'
    ]
  },
  {
    id: 'dialing-in-v60',
    title: 'How we dial in a V60 pour-over',
    category: 'Brewing Technique',
    date: 'SEPTEMBER 2026',
    readTime: '6 MIN READ',
    summary: 'The subtle variable relationship between grind size, water temp, and bloom time.',
    content: [
      'Brewing a clean cup of filter coffee requires balancing extraction yield between 18% and 22%. Too low, and the cup tastes hollow and sour; too high, and astringent tannins dominate.',
      'We use a 1:16.6 ratio (15g coffee to 250g water) with low-mineral water filtered through reverse osmosis at 92°C.',
      'The key step is the bloom: pouring 50g of water and agitating gently for 45 seconds. This allows trapped carbon dioxide gas from roasting to degas, opening up the coffee cell matrix for uniform extraction during the main pour.'
    ]
  },
  {
    id: 'anatomy-of-espresso',
    title: 'What makes a good espresso',
    category: 'Extraction Science',
    date: 'AUGUST 2026',
    readTime: '5 MIN READ',
    summary: 'Understanding pressure curves, channel prevention, and TDS measurement.',
    content: [
      'An espresso is not simply concentrated coffee; it is a high-pressure emulsion of insoluble oils and soluble solids suspended in liquid water.',
      'We extract at a steady 9 bar pressure with a 1:2 yield ratio (18.5g dose producing 37g liquid in 27–29 seconds).',
      'Using a refractometer, we measure the Total Dissolved Solids (TDS) to ensure a 9.8% to 10.5% concentration, delivering a coating body, vibrant sweetness, and zero harsh bitterness.'
    ]
  },
  {
    id: 'three-coffees-month',
    title: "Three coffees we're drinking this month",
    category: 'Curated Selections',
    date: 'JULY 2026',
    readTime: '3 MIN READ',
    summary: 'Our baristas highlight their favorite micro-lots from Ethiopia, Colombia, and Kenya.',
    content: [
      'This month, our roastery team selected three remarkable single-origin lots:',
      '1. Ethiopia Guji — Crisp notes of bergamot tea and peach blossom.',
      '2. Colombia Pink Bourbon — Vibrant anaerobic notes of guava and cacao nibs.',
      '3. Kenya Nyeri SL28 — Sparkling blackcurrant acidity and rich cane sugar balance.'
    ]
  }
];
