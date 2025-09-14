import { act, renderHook } from '@testing-library/react-native';
import { mockNavigate } from '~/jest/mocks';
import { Equipment } from '~/models/equipment.model';
import useEquipmentCardViewModel from '../view.model';

const equipmentMock: Equipment = {
  id: 1,
  common_locations: [],
  dlc: false,
  name: 'MyEquip',
  category: 'Test',
  description: 'Test',
  image: 'Test',
  properties: {
    attack: 1,
    defense: 1,
    effect: '',
    type: '',
  },
};

describe('EquipmentCardViewModel', () => {
  it('handleOnPress should call navigation.navigate', () => {
    const { result } = renderHook(() => useEquipmentCardViewModel());

    act(() => {
      result.current.handleOnPress(equipmentMock);
    });

    expect(mockNavigate).toHaveBeenCalledWith('EquipmentDetails', {
      equipment: equipmentMock,
    });
  });
});
