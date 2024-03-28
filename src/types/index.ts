export interface InteractiveBubbleProps {
  onSelect: (args: any) => void;
  value: string | string[];
  id: string;
}

export interface SimpleStudent {
  id: string;
  name: string;
  lastname: string;
  image?: string;
}
