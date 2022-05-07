export interface PropsFilter {
  categories: string[];
  active: string;
  handleSelectCatgory: (category: string) => void;
  loading: boolean;
}

export interface PropsCard {
  active: boolean;
}
