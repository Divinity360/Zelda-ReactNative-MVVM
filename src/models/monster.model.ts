export interface Monster {
  category: string;
  common_locations: string[] | null;
  description: string;
  dlc: boolean;
  drops: string[] | null;
  id: number;
  image: string;
  name: string;
}
