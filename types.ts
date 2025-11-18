
export interface Currency {
  name: 'usd' | 'eur' | 'inr';
  symbol: '$' | '€' | '₹';
}

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
}

export interface CoinDetails extends Coin {
    market_data: {
        current_price: { [key: string]: number };
        market_cap: { [key: string]: number };
        high_24h: { [key: string]: number };
        low_24h: { [key: string]: number };
    };
    description: {
        en: string;
    };
}

export type HistoricalData = [number, number][];

export interface CoinContextType {
  allCoins: Coin[];
  currency: Currency;
  setCurrency: (currency: Currency['name']) => void;
  loading: boolean;
}

export interface User {
  name: string;
  email: string;
}

export interface AuthenticatedCoinContextType extends CoinContextType {
  user?: User | null;
  signup: (user: User) => void;
  signout: () => void;
}
