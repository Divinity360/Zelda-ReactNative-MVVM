import { render } from '@testing-library/react-native';
import MonstersListScreen from '../index';
import useMonsterViewModel from '../view.model';

jest.mock('../view.model', () => jest.fn());
(useMonsterViewModel as jest.Mock).mockImplementation(() => ({
  data: [{ id: 1, name: 'myMonster' }],
  isLoading: false,
  error: null,
}));

describe('MonstersListScreen', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<MonstersListScreen />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot when empty', () => {
    (useMonsterViewModel as jest.Mock).mockImplementation(() => ({
      data: [],
      isLoading: false,
      error: null,
    }));
    const { toJSON } = render(<MonstersListScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
