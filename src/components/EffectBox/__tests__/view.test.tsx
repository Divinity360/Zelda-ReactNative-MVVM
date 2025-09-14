import { render } from '@testing-library/react-native';
import EffectBox from '..';

describe('EffectBox', () => {
  it('should render correctly', () => {
    const { getByText } = render(<EffectBox value={10} type="attack" />);
    expect(getByText('10')).toBeTruthy();
  });

  it('should render correctly with defense type', () => {
    const { getByText } = render(<EffectBox value={10} type="defense" />);
    expect(getByText('10')).toBeTruthy();
  });

  it('should render correctly with bonus type', () => {
    const { getByText } = render(<EffectBox value={10} type="bonus" />);
    expect(getByText('10')).toBeTruthy();
  });

  it('should match snapshot for attack type', () => {
    const { toJSON } = render(<EffectBox value={10} type="attack" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot for defense type', () => {
    const { toJSON } = render(<EffectBox value={10} type="defense" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot for bonus type', () => {
    const { toJSON } = render(<EffectBox value={10} type="bonus" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
