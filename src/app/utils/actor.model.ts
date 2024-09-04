export interface Actor {
    character: {
      id: number,
      name: string;
      image: {
        medium: string;
        original: string;
      };
    }
    person: {
      id: number;
      name: string;
      gender: string;
      image: {
        medium: string;
        original: string;
      };
    }
  }