export interface PropsFilter {
  categories: string[];
  active: string;
  handleSelectCatgory: (category: string) => void;
}

export interface PropsCard {
  active: boolean;
}
