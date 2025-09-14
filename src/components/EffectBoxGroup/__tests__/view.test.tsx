import { render } from '@testing-library/react-native';
import EffectBoxGroup from '..';

describe('EffectBoxGroup', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <EffectBoxGroup
        equipProps={{
          attack: 10,
          defense: 20,
          effect: '',
          type: '',
        }}
      />
    );
    expect(getByText('10')).toBeTruthy();
    expect(getByText('20')).toBeTruthy();
  });

  it('should not render defense box when it is not provided', () => {
    const { getByText } = render(
      <EffectBoxGroup
        equipProps={{
          attack: 10,
          defense: 0,
          effect: '',
          type: '',
        }}
      />
    );
    expect(() => getByText('0')).toThrow();
  });
});
