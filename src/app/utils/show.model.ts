export interface Show {
    id: number;
    name: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string;
    schedule: {
      time: string;
      days: string[];
    };
    rating: {
      average: number;
    };
    summary: string;
    image: {
      medium: string;
      original: string;
    };
  }