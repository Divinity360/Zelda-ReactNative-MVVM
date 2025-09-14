import { useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';
import { useLayoutEffect, useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import colors from '~/constants/colors';

const useHeaderSearch = () => {
  const [, setSearchString] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  const debouncedString = debounce((text: string) => {
    setSearchTerm(text);
  }, 500);

  const handleOnChangeText = (
    event: NativeSyntheticEvent<TextInputFocusEventData>
  ) => {
    setSearchString(event.nativeEvent.text);
    debouncedString(event.nativeEvent.text);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search',
        placeholderTextColor: '#fff',
        textColor: colors.text,
        backgroundColor: colors.background,
        hideWhenScrolling: true,
        onChangeText: (
          event: NativeSyntheticEvent<TextInputFocusEventData>
        ) => {
          handleOnChangeText(event);
        },
      },
    });

    return () =>
      navigation.setOptions({
        headerSearchBarOptions: undefined,
      });
  }, [navigation]);

  return {
    searchTerm,
  };
};

export default useHeaderSearch;
