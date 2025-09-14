export const mockApiHooks = {
  useGetAllMonstersQuery: jest.fn(() => ({
    data: {
      data: [{ id: '1', name: 'Lynel' }],
    },
    isLoading: false,
    error: undefined as any,
  })),
  useGetAllMaterialsQuery: jest.fn(() => ({
    data: {
      data: [{ id: '1', name: 'Apple' }],
    },
    isLoading: false,
    error: undefined as any,
  })),
  useGetAllEquipmentsQuery: jest.fn(() => ({
    data: {
      data: [{ id: '1', name: 'Sword' }],
    },
    isLoading: false,
    error: undefined as any,
  })),
  useGetAllCreaturesQuery: jest.fn(() => ({
    data: {
      data: [{ id: '1', name: 'Horse' }],
    },
    isLoading: false,
    error: undefined as any,
  })),
};
