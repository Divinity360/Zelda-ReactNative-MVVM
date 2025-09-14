import { fireEvent, render } from '@testing-library/react-native';
import MenuButton from '../';

const handleOnPressMock = jest.fn();
jest.mock('../view.model', () => jest.fn());

import useMenuButtonVM from '../view.model';

(useMenuButtonVM as jest.Mock).mockImplementation(() => ({
  handleOnPress: handleOnPressMock,
}));

describe('<MenuButton />', () => {
  beforeEach(() => {
    handleOnPressMock.mockClear();
  });

  it('MenuButton renders correctly', () => {
    const { getByText } = render(<MenuButton title="MyButton" color="red" />);

    getByText('MyButton');
  });

  it('MenuButton has the backgroundColor passed as props', () => {
    const { getByTestId } = render(<MenuButton title="MyButton" color="red" />);

    expect(getByTestId('menu-button-container')).toHaveStyle({
      backgroundColor: 'red',
    });
  });

  it('Calls handleOnPress from viewModel', () => {
    const { getByTestId } = render(
      <MenuButton title="Monsters" color="red" linkTo="Monsters" />
    );

    fireEvent.press(getByTestId('menu-button'));
    expect(handleOnPressMock).toHaveBeenCalled();
  });

  it('Calls handleOnPress from viewModel with correct param', () => {
    const { getByTestId } = render(
      <MenuButton title="Monsters" color="red" linkTo="Monsters" />
    );

    fireEvent.press(getByTestId('menu-button'));
    expect(handleOnPressMock).toHaveBeenCalledWith('Monsters');
  });
});
