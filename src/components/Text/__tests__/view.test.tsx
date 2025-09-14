import { render } from '@testing-library/react-native';

import Text from '../';

describe('<Text />', () => {
  it('Text renders correctly', () => {
    const { getByText } = render(<Text>Hi</Text>);

    getByText('Hi');
  });

  it('Text component has the custom font', () => {
    const { getByText } = render(<Text type="title">CustomFont</Text>);

    expect(getByText('CustomFont')).toHaveStyle({
      fontFamily: 'Hylia',
    });
  });

  it('Text has correct style by type "title"', () => {
    const { getByText } = render(<Text type="title">Title</Text>);

    expect(getByText('Title')).toHaveStyle({
      fontSize: 32,
      fontWeight: 'bold',
    });
  });

  it('Text has correct style by type "subtitle"', () => {
    const { getByText } = render(<Text type="subtitle">Subtitle</Text>);

    expect(getByText('Subtitle')).toHaveStyle({
      fontSize: 20,
      fontWeight: 'bold',
    });
  });
});
