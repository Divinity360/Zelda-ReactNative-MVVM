import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from './types';

const useMenuButtonVM = () => {
  const navigator = useNavigation<any>();

  const handleOnPress = (linkTo?: ScreenNames) => {
    if (linkTo) {
      navigator.navigate(linkTo);
    }
  };

  return { handleOnPress };
};

export default useMenuButtonVM;
