export interface Episode {
    id: number;
    name: string;
    season: number;
    number: number;
    runtime: number;
    premiered: string;
    rating: {
      average: number;
    };
    summary: string;
    image: {
      medium: string;
      original: string;
    };
  }