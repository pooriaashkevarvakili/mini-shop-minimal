export type shopHeroType = {
  title?: string | null;
  titleOne?: string | null;
  description: string;
};

export type shopHeroResponseType = {
  message: string;
  data: shopHeroType[];
};