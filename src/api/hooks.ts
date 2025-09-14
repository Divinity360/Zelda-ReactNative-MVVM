import {
  useGetAllCreaturesQuery,
  useGetAllEquipmentsQuery,
  useGetAllMaterialsQuery,
  useGetAllMonstersQuery,
} from './zeldaApi';

export const hooksApi = {
  useGetAllMonstersQuery,
  useGetAllMaterialsQuery,
  useGetAllEquipmentsQuery,
  useGetAllCreaturesQuery,
};

export type HooksApi = typeof hooksApi;
