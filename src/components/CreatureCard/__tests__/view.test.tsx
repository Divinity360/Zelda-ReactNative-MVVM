import { fireEvent, render } from '@testing-library/react-native';
import { Creature } from '~/models/creature.model';
import CreatureCard from '..';
import useCreatureCardVM from '../view.model';

// Begin Hook mock
const mockHandleOnPress = jest.fn();
jest.mock('../view.model', () => jest.fn());

(useCreatureCardVM as jest.Mock).mockImplementation(() => ({
  handleOnPress: mockHandleOnPress,
}));
// End Hook mock

const creature: Creature = {
  name: 'MyCreature',
  description: '',
  category: '',
  common_locations: [],
  cooking_effect: '',
  dlc: false,
  drops: [],
  edible: false,
  hearts_recovered: 3.5,
  id: 0,
  image: '',
};

describe('CreatureCard', () => {
  it('should renders correctly', () => {
    const { getByText } = render(<CreatureCard creature={creature} />);

    getByText('MyCreature');
  });

  it('should call the viewModels handleOnPress when pressed', () => {
    const { getByTestId } = render(<CreatureCard creature={creature} />);

    fireEvent.press(getByTestId('creature-card-button'));

    expect(mockHandleOnPress).toHaveBeenCalled();
  });
});
