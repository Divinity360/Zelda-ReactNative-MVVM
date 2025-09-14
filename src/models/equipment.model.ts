export interface EquipmentProperties {
  attack: number; // damage the entry does (0 for shields and arrows)
  defense: number; // defense the entry offers (0 for equipment that aren't shields)
  effect: string; // special effect of the weapon (e.g. "wind razor"), empty if none
  type: string; // type of weapon (e.g. "one-handed weapon")
}

export interface Equipment {
  name: string; // entry name
  id: number; // ID as shown in compendium
  category: string; // "equipment"
  description: string; // short paragraph
  image: string; // URL of image
  common_locations: string[] | null; // where the entry is commonly seen
  properties: EquipmentProperties;
  dlc: boolean; // whether the entry is from a DLC pack
}
