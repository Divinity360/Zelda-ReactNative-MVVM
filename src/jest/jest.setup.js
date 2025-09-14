import '@testing-library/jest-native/extend-expect';
import { mockNavigate } from './mocks';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
      setOptions: jest.fn(),
      goBack: jest.fn(),
      push: jest.fn(),
      replace: jest.fn(),
    }),
  };
});

// Components - Mocks to avoid circular references
jest.mock('~/components/MonsterCard', () => {
  const { Text } = require('react-native');
  return ({ monster }) => <Text>Monster: {monster.name}</Text>;
});

jest.mock('~/components/ZeldaList', () => {
  const { View, Text } = require('react-native');
  return ({ data, isLoading, error }) => {
    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;
    if (!data || data.length === 0) return <Text>List Empty</Text>;
    return (
      <View>
        {data.map(item => (
          <Text key={item.id}>Monster: {item.name}</Text>
        ))}
      </View>
    );
  };
});
