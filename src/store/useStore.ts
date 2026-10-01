import { create } from 'zustand';
import type { Coffee } from '../data/coffees';
import type { MenuItem } from '../data/menu';
import type { Article } from '../data/journal';
import type { EventItem } from '../data/events';

export type ViewState = 
  | 'cafe' 
  | 'coffee' 
  | 'menu' 
  | 'lab' 
  | 'journal' 
  | 'events' 
  | 'visit' 
  | 'cart' 
  | 'product_detail'
  | 'seating';

export type CameraState = 
  | 'entrance'
  | 'counter'
  | 'espresso'
  | 'brewing'
  | 'coffee_shelf'
  | 'journal_table'
  | 'event_poster'
  | 'menu_board'
  | 'seating';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  milk?: string;
  size?: string;
  extraShot?: boolean;
}

interface AppState {
  // Views & Camera
  currentView: ViewState;
  cameraState: CameraState;
  setView: (view: ViewState, cameraState?: CameraState) => void;
  setCameraState: (cameraState: CameraState) => void;

  // Selected Content
  selectedCoffee: Coffee | null;
  setSelectedCoffee: (coffee: Coffee | null) => void;
  selectedArticle: Article | null;
  setSelectedArticle: (article: Article | null) => void;
  selectedEvent: EventItem | null;
  setSelectedEvent: (event: EventItem | null) => void;

  // Cart
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  // App Settings & Modes
  hasEntered: boolean;
  setHasEntered: (entered: boolean) => void;
  is3DMode: boolean;
  toggle3DMode: () => void;
  isAudioEnabled: boolean;
  toggleAudio: () => void;
  qualityMode: 'high' | 'medium' | 'low';
  setQualityMode: (mode: 'high' | 'medium' | 'low') => void;
}

export const useStore = create<AppState>((set) => ({
  currentView: 'cafe',
  cameraState: 'entrance',

  setView: (view, cameraState) => 
    set((state) => ({ 
      currentView: view,
      cameraState: cameraState || (view === 'cafe' ? 'entrance' : state.cameraState)
    })),

  setCameraState: (cameraState) => set({ cameraState }),

  selectedCoffee: null,
  setSelectedCoffee: (coffee) => set({ selectedCoffee: coffee }),

  selectedArticle: null,
  setSelectedArticle: (article) => set({ selectedArticle: article }),

  selectedEvent: null,
  setSelectedEvent: (event) => set({ selectedEvent: event }),

  cart: [],
  addToCart: (newItem) =>
    set((state) => {
      const itemIndex = state.cart.findIndex(
        (i) => i.id === newItem.id && i.milk === newItem.milk && i.size === newItem.size
      );
      if (itemIndex > -1) {
        const updatedCart = [...state.cart];
        updatedCart[itemIndex].quantity += newItem.quantity;
        return { cart: updatedCart, isCartOpen: true };
      }
      return { cart: [...state.cart, newItem], isCartOpen: true };
    }),

  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((i) => i.id !== id) })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: quantity <= 0 
        ? state.cart.filter((i) => i.id !== id)
        : state.cart.map((i) => (i.id === id ? { ...i, quantity } : i)),
    })),

  clearCart: () => set({ cart: [] }),
  isCartOpen: false,
  setIsCartOpen: (open) => set({ isCartOpen: open }),

  hasEntered: false,
  setHasEntered: (entered) => set({ hasEntered: entered }),
  is3DMode: true,
  toggle3DMode: () => set((state) => ({ is3DMode: !state.is3DMode })),
  isAudioEnabled: false,
  toggleAudio: () => set((state) => ({ isAudioEnabled: !state.isAudioEnabled })),
  qualityMode: 'high',
  setQualityMode: (qualityMode) => set({ qualityMode }),
}));
