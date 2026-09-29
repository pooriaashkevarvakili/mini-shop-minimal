
export type NewsSlugType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string ;
  date: string;
  category: string;
  content: string;
};

export type NewsSlugResponse = {
  message: string;
  data: NewsSlugType[];
};