export interface Material {
  name: string; // entry name
  id: number; // ID as shown in compendium
  category: string; // "materials"
  description: string; // short paragraph
  image: string; // URL of image
  common_locations: string[] | null; // where the entry is commonly seen
  hearts_recovered: number; // health recovered when eaten raw
  cooking_effect: string; // special effect when used in a dish/elixir
  dlc: boolean; // whether the entry is from a DLC pack
  fuse_attack_power: number; // damage added when fused with a weapon (Tears of the Kingdom only)
}
