export interface Billobard {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billobard;
}
