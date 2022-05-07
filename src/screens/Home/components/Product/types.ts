export interface Props {
  category: string;
  description?: string;
  image: string;
  price: number;
  title: string;
  full: boolean;
  onPress: () => void;
}

export interface ContainerProps {
  full: boolean;
}

export interface BackgroundProps {
  full: boolean;
}
