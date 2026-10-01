export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: string;
  status: 'Open' | 'Limited' | 'Sold Out';
}

export const EVENTS: EventItem[] = [
  {
    id: 'noir-after-dark',
    title: 'NOIR AFTER DARK',
    subtitle: 'Coffee + Ambient Vinyl Sessions',
    date: 'Friday, October 23',
    time: '8:00 PM — 11:00 PM',
    location: 'NOIR Bar, Pune',
    description: 'An intimate evening of experimental espresso cocktails, slow cold drip tastings, and live deep ambient vinyl sets in low warm lighting.',
    capacity: '25 Guests',
    status: 'Limited'
  },
  {
    id: 'cupping-session',
    title: 'Public Coffee Cupping',
    subtitle: 'Explore 6 Single Origins Side by Side',
    date: 'Saturday, October 31',
    time: '10:30 AM — 12:00 PM',
    location: 'Brewing Lab',
    description: 'Learn how professional coffee tasters evaluate aroma, acidity, body, and flavor balance. Blind cupping of fresh micro-lots from East Africa and South America.',
    capacity: '12 Guests',
    status: 'Open'
  },
  {
    id: 'brewing-masterclass',
    title: 'V60 Brewing Masterclass',
    subtitle: 'Dial In Filter Coffee at Home',
    date: 'Sunday, November 8',
    time: '4:00 PM — 6:00 PM',
    location: 'Brewing Lab',
    description: 'Hands-on workshop covering water chemistry, grind calibration, pour rate dynamics, and sensory evaluation with our head roaster.',
    capacity: '8 Guests',
    status: 'Open'
  }
];
