import { fireEvent, render } from '@testing-library/react-native';
import EquipmentCard from '..';
import { Equipment } from '~/models/equipment.model';
import useEquipmentCardViewModel from '../view.model';

const mockHandleOnPress = jest.fn();
jest.mock('../view.model', () => jest.fn());
(useEquipmentCardViewModel as jest.Mock).mockImplementation(() => ({
  handleOnPress: mockHandleOnPress,
}));

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

describe('useEquipmentCardViewModel', () => {
  beforeEach(() => {
    mockHandleOnPress.mockClear();
  });

  it('should render correctly', () => {
    const { getByText } = render(<EquipmentCard equipment={equipmentMock} />);

    expect(getByText('MyEquip')).toBeTruthy();
  });

  it('should call view.model handleOnPress when pressed ', () => {
    const { getByTestId } = render(<EquipmentCard equipment={equipmentMock} />);

    fireEvent.press(getByTestId('equipment-card-button'));

    expect(mockHandleOnPress).toHaveBeenCalledWith(equipmentMock);
  });
});
