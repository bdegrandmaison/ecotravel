export type Image = {
  src: string;
  altText: string;
};

export type DestinationType = {
  id: number;
  name: string;
  description: string;
  location: string;
  image: Image;
  price: number;
  startDate: string;
  endDate: string;
  maxParticipants: number;
  currentParticipants: number;
  summary: {
    why: string;
    action: string;
  };
  additionalImages: Image[];
};

export type SearchDestinationRequest = {
  dates?: [string, string];
  travellers?: number;
};
